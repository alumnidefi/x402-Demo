const http = require("http");

async function testWithBrowserHeaders() {
  try {
    console.log("🧪 Testing paywall with proper browser headers\n");

    const response = await new Promise((resolve, reject) => {
      const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/stories/when-the-flames-fall',
        method: 'GET',
        headers: {
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      const req = http.request(options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
      });

      req.on("error", reject);
      req.setTimeout(5000, () => {
        req.destroy();
        reject(new Error("Request timeout"));
      });
      
      req.end();
    });

    console.log("📊 Response Status:", response.status);
    console.log("📋 Response Headers:");
    console.log("   content-type:", response.headers["content-type"]);
    console.log("   x-payment-response:", response.headers["x-payment-response"] || "NOT SET");

    if (response.status === 402) {
      console.log("\n✅ SUCCESS: Got 402 Payment Required!");
      console.log("📄 Response includes paywall HTML");
      const hasPaywallUI = response.body.includes("onramp") || response.body.includes("Coinbase") || response.body.includes("payment");
      console.log("   Has paywall UI: " + (hasPaywallUI ? "YES" : "NOT DETECTED"));
    } else {
      console.log(`\n❌ Status: ${response.status} (expected 402)`);
    }

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

testWithBrowserHeaders();
