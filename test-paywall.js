const http = require("http");

async function testPaywall() {
  try {
    console.log("🧪 Testing paywall endpoint with detailed logging\n");

    const response = await new Promise((resolve, reject) => {
      const req = http.get("http://localhost:3000/stories/when-the-flames-fall", (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      });
      req.on("error", reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error("Request timeout"));
      });
    });

    console.log("📊 Response Status:", response.status);
    console.log("\n📋 Key Response Headers:");
    console.log(`   x-payment-required: ${response.headers["x-payment-required"] || "NOT SET"}`);
    console.log(`   www-authenticate: ${response.headers["www-authenticate"] || "NOT SET"}`);
    console.log(`   content-type: ${response.headers["content-type"]}`);

    if (response.status === 402) {
      console.log("\n✅ SUCCESS: Paywall is working! (HTTP 402 Payment Required detected)");
    } else if (response.status === 200) {
      console.log("\n❌ PROBLEM: Paywall returned 200 OK instead of 402 Payment Required");
      console.log("\n🔍 Debugging:");
      console.log("   - Middleware IS executing (logs showed this)");
      console.log("   - But it's not enforcing payment");
      console.log("   - Check if paymentMiddleware from x402-next is properly configured");
      console.log("   - Or check if x402-next version is compatible");
      
      // Check if response has x402 specific headers
      const hasX402Headers = Object.keys(response.headers).some(h => h.includes("x402") || h.includes("payment"));
      console.log(`\n   - Has x402/payment headers: ${hasX402Headers ? "YES" : "NO"}`);
    }

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

testPaywall();
