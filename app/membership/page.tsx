export default function MembershipPage() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="pill">Membership</p>
          <h2>Command-level access</h2>
        </div>
        <p>
          Every membership tier unlocks progressively more intimate dispatches, from nightly briefings to invitation-only
          tactical salons. Choose the level that matches how deeply you want to embed with the campaign.
        </p>
      </div>
      <div className="card">
        <h3>Elevate your patrol</h3>
        <p className="muted">
          When you subscribe, x402 powers the recurring payments and lets you focus on the story. We bill through Coinbase
          x402 facilitation on the Base Sepolia testnet so you can preview live crypto settlement before going into
          production.
        </p>
        <ul className="stack" style={{ marginTop: "1.5rem" }}>
          <li>Auto-renewing tiers with early access to drop-ins.</li>
          <li>Priority support for transition to your production wallet.</li>
          <li>Member-only channels replete with strategic briefs.</li>
        </ul>
        <p className="muted" style={{ marginTop: "1rem" }}>
          Payment handled by x402 middleware, referencing `{process.env.NETWORK || "base-sepolia"}` and your configured
          wallet. Switch to your live wallet address, connect a facilitator, and let the paywall guard content for you.
        </p>
      </div>
    </section>
  );
}
