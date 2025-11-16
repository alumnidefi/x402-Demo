const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: path.join(__dirname, ".env.local") });

async function main() {
  try {
    const apiKey = process.env.CDP_API_KEY_ID;
    const apiSecret = process.env.CDP_API_KEY_SECRET;
    const wallet = process.env.RESOURCE_WALLET_ADDRESS;

    console.log("✅ Environment Variables Loaded:");
    console.log({
      CDP_API_KEY_ID: apiKey ? "✓ SET" : "✗ MISSING",
      CDP_API_KEY_SECRET: apiSecret ? "✓ SET" : "✗ MISSING",
      RESOURCE_WALLET_ADDRESS: wallet ? `✓ ${wallet}` : "✗ MISSING",
      NETWORK: process.env.NETWORK || "base-sepolia",
      FACILITATOR_URL: process.env.NEXT_PUBLIC_FACILITATOR_URL || "https://x402.org/facilitator",
    });

    if (!apiKey || !apiSecret || !wallet) {
      console.error("❌ Missing required environment variables");
      process.exit(1);
    }

    console.log("\n✅ All required environment variables are set!");
    console.log("Ready to start the dev server with: npm run dev");

  } catch (err) {
    console.error("❌ Error:", err.message || err.toString());
    process.exit(1);
  }
}

main();
