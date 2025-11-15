export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="logo-mark">
          <span role="img" aria-label="battle icon" style={{ fontSize: "2rem" }}>
            ⚔️
          </span>
        </div>
        <p className="pill">Field Dispatch · x402 Paywall</p>
        <h1>
          The Battle's End <span>Intel Deck</span>
        </h1>
        <p>
          Premium reports, livestream dispatches, and membership-only strategy guides delivered with x402
          paywalls so you can pay only for what you read.
        </p>
        <div className="hero-meta">
          <div>
            <strong>Live Test Payments</strong>
            Base-Sepolia · $1 paywall
          </div>
          <div>
            <strong>Membership Editions</strong>
            Tiered access · chapter-style storytelling
          </div>
        </div>
      </div>
    </section>
  );
}
