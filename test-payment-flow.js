const path = require("path");
const dotenv = require("dotenv");
const { getAddress } = require("viem");
const { privateKeyToAccount } = require("viem/accounts");
const { createPaymentHeader } = require("x402/client");
const { processPriceToAtomicAmount } = require("x402/shared");

dotenv.config({ path: path.resolve(__dirname, ".env.local") });

const PAYWALL_HOST = process.env.PAYWALL_HOST || "http://localhost:3000";
const PAYWALL_PATH = process.env.PAYWALL_PATH || "/stories/when-the-flames-fall";
const PAYWALL_URL = new URL(PAYWALL_PATH, PAYWALL_HOST).toString();
const PRICE = process.env.PAYWALL_PRICE || "$1.00";
const NETWORK = (process.env.NETWORK || "base-sepolia").trim();
const DESCRIPTION = process.env.PAYWALL_DESCRIPTION ?? "Access to a tactical briefing with The Battle's End newsroom";
const MIME_TYPE = process.env.PAYWALL_MIME || "text/html";
const DISCOVERABLE = process.env.PAYWALL_DISCOVERABLE !== "false";

const PAY_TO = process.env.RESOURCE_WALLET_ADDRESS;

if (!PAY_TO) {
  throw new Error("RESOURCE_WALLET_ADDRESS must be set before running the payment tester.");
}

const DEFAULT_HEADERS = {
  Accept: "text/html",
  "User-Agent": "x402 Payment Flow Tester",
};

async function fetchPaywall(extraHeaders = {}) {
  return fetch(PAYWALL_URL, {
    method: "GET",
    headers: { ...DEFAULT_HEADERS, ...extraHeaders },
  });
}

function buildPaymentRequirements(resourceUrl) {
  const amountInfo = processPriceToAtomicAmount(PRICE, NETWORK);
  if ("error" in amountInfo) {
    throw new Error(`Price parsing failed: ${amountInfo.error}`);
  }
  const assetAddress = getAddress(amountInfo.asset.address);
  const payToAddress = getAddress(PAY_TO);
  return {
    scheme: "exact",
    network: NETWORK,
    maxAmountRequired: amountInfo.maxAmountRequired,
    resource: resourceUrl,
    description: DESCRIPTION,
    mimeType: MIME_TYPE,
    payTo: payToAddress,
    maxTimeoutSeconds: 300,
    asset: assetAddress,
    extra: amountInfo.asset.eip712,
    outputSchema: {
      input: {
        type: "http",
        method: "GET",
        discoverable: DISCOVERABLE,
      },
      output: {},
    },
  };
}

function normalizeKey(key) {
  const trimmed = key.trim();
  if (/^0x[a-fA-F0-9]{64}$/.test(trimmed)) {
    return trimmed;
  }
  if (/^[a-fA-F0-9]{64}$/.test(trimmed)) {
    return `0x${trimmed}`;
  }
  throw new Error("PAYMENT_PAYER_PRIVATE_KEY is not a valid 32-byte hex string.");
}

async function run() {
  console.log("x402 payment flow tester");
  console.log(`  paywall: ${PAYWALL_URL}`);
  console.log(`  price: ${PRICE} on ${NETWORK}\n`);

  const initialResponse = await fetchPaywall();
  console.log(`Initial paywall status: ${initialResponse.status}`);

  if (initialResponse.status !== 402) {
    console.warn("Paywall did not return 402; it may not be gated yet.");
  } else {
    console.log("Paywall challenge detected.");
  }

  const paymentRequirements = buildPaymentRequirements(PAYWALL_URL);

  const privateKeyEnv = process.env.PAYMENT_PAYER_PRIVATE_KEY;
  if (!privateKeyEnv) {
    console.log("\nPayment header generation skipped.");
    console.log("Set PAYMENT_PAYER_PRIVATE_KEY to a funded test account to exercise the payment flow.");
    return;
  }

  const signer = privateKeyToAccount(normalizeKey(privateKeyEnv));
  const paymentHeader = await createPaymentHeader(signer, 1, paymentRequirements);
  console.log("\nGenerated X-PAYMENT header.");

  const paidResponse = await fetchPaywall({ "X-PAYMENT": paymentHeader });
  console.log(`Paid response status: ${paidResponse.status}`);
  console.log(
    `X-PAYMENT-RESPONSE: ${paidResponse.headers.get("x-payment-response") || "not set"}`
  );

  if (paidResponse.status === 200) {
    console.log("Payment flow succeeded: content unlocked.");
  } else {
    console.warn("Payment attempt did not unlock the content. Inspect the headers above.");
  }
}

run().catch((error) => {
  console.error("Tester failed:", error instanceof Error ? error.message : error);
  process.exit(1);
});
