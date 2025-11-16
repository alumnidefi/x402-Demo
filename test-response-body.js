const http = require("http");

async function testPaywallResponse() {
  try {
    console.log("🧪 Testing paywall endpoint response body\n");

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
    console.log("📄 Response Body (first 2000 chars):");
    console.log(response.body.substring(0, 2000));
    
    // Check if the response contains paywall keywords
    const hasPaywall = response.body.toLowerCase().includes("payment") || 
                       response.body.toLowerCase().includes("paywall") ||
                       response.body.toLowerCase().includes("402") ||
                       response.body.includes("x402");
    
    console.log(`\n🔍 Contains paywall content: ${hasPaywall ? "YES" : "NO"}`);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

testPaywallResponse();
