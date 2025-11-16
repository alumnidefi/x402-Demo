const https = require("https");

async function testFacilitator() {
  try {
    console.log("🧪 Testing x402 facilitator endpoint\n");
    
    const url = "https://x402.org/facilitator";
    console.log(`Connecting to: ${url}\n`);

    const response = await new Promise((resolve, reject) => {
      const req = https.get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      });
      req.on("error", reject);
      req.setTimeout(10000, () => {
        req.destroy();
        reject(new Error("Request timeout"));
      });
    });

    console.log("📊 Response Status:", response.status);
    console.log("📋 Response Headers:", response.headers);
    console.log("📄 Response Body (first 500 chars):");
    console.log(response.body.substring(0, 500));

    if (response.status === 200) {
      console.log("\n✅ Facilitator is reachable and responding");
    }

  } catch (err) {
    console.error("❌ Facilitator error:", err.message);
    console.log("\nThis explains why the paywall isn't working!");
    console.log("The facilitator endpoint needs to be accessible for x402 to verify payments.");
  }
}

testFacilitator();
