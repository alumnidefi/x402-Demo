import { CdpClient } from "@coinbase/cdp-sdk";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, ".env.local") });

async function main() {
  try {
    const apiKey = process.env.CDP_API_KEY_ID;
    const apiSecret = process.env.CDP_API_KEY_SECRET;
    const wallet = process.env.RESOURCE_WALLET_ADDRESS;

    if (!apiKey || !apiSecret || !wallet) {
      console.error("❌ Missing environment variables");
      console.log({
        CDP_API_KEY_ID: !!apiKey,
        CDP_API_KEY_SECRET: !!apiSecret,
        RESOURCE_WALLET_ADDRESS: !!wallet,
      });
      process.exit(1);
    }

    const client = new CdpClient({
      apiKey,
      apiSecret,
    });

    console.log("➡️ Testing CDP credentials…");

    // This call fails IMMEDIATELY if credentials are wrong
    const account = await client.evm.getAccount(wallet);

    console.log("✅ CDP credentials VALID");
    console.log("Wallet:", wallet);
    console.log("Chain ID:", account.chainId);
    console.log("Balances:", account.balance);

  } catch (err) {
    console.error("❌ CDP credential test FAILED");
    console.error("Error:", err.message || err.toString());
  }
}

main();
