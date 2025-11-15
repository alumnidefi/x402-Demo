import Link from "next/link";
import { notFound } from "next/navigation";
import { premiumArticles } from "@/lib/articles";

export default async function StoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = premiumArticles.find((entry) => entry.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="pill">Paywall</p>
          <h2>{article?.title}</h2>
        </div>
        <p>
          x402 protects this route with a $1 Base-Sepolia payment requirement. After settlement is confirmed by the
          facilitator, the response will carry an `X-PAYMENT-RESPONSE` header with the transaction details.
        </p>
      </div>
      <article className="card">
        <p className="muted">{article?.date}</p>
        <div className="stack" style={{ gap: "1rem", marginTop: "1rem" }}>
          {article?.body.split("\n").map((line, index) =>
            line.trim() ? (
              <p key={index} style={{ margin: 0 }}>
                {line}
              </p>
            ) : null,
          )}
        </div>
      </article>
      <div className="card" style={{ marginTop: "2rem" }}>
        <p className="muted">
          Need to switch wallets? Update `RESOURCE_WALLET_ADDRESS` and `NETWORK` in your `.env` file. This paywall runs on
          Base-Sepolia testnet through the default x402 facilitator at `https://x402.org/facilitator`.
        </p>
        <Link href="/membership" className="cta-button">
          See membership tiers
        </Link>
      </div>
    </section>
  );
}
