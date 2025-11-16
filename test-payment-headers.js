const http = require("http");

async function testWithPaymentHeader() {
  try {
    console.log("🧪 Testing paywall with and without payment headers\n");

    // Test 1: Without any headers
    console.log("Test 1: Request WITHOUT payment headers");
    const res1 = await makeRequest({});
    console.log(`  Status: ${res1.status}`);
    console.log(`  Has payment headers: ${Object.keys(res1.headers).some(h => h.includes("402") || h.includes("payment")) ? "YES" : "NO"}\n`);

    // Test 2: With Authorization header
    console.log("Test 2: Request WITH Authorization header");
    const res2 = await makeRequest({
      "Authorization": "Bearer test-token"
    });
    console.log(`  Status: ${res2.status}`);
    console.log(`  Has payment headers: ${Object.keys(res2.headers).some(h => h.includes("402") || h.includes("payment")) ? "YES" : "NO"}\n`);

  } catch (err) {
    console.error("❌ Error:", err.message);
  }
}

function makeRequest(headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: 'localhost',
      port: 3000,
      path: '/stories/when-the-flames-fall',
      method: 'GET',
      headers: headers
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
}

testWithPaymentHeader();
