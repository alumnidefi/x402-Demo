const facilitatorUrl = process.env.NEXT_PUBLIC_FACILITATOR_URL || "https://x402.org/facilitator";

export async function GET() {
  try {
    const response = await fetch(`${facilitatorUrl}/supported`, {
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 10 },
    });

    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Unable to reach facilitator" }), {
        status: 502,
        headers: { "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Facilitator test request failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
