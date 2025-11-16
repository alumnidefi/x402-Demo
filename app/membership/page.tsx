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
          When you subscribe, recurring billing is handled securely so you can focus on the story. This tiered system lets
          you preview live settlement before moving into production.
        </p>
        <ul className="stack" style={{ marginTop: "1.5rem" }}>
          <li>Auto-renewing tiers with early access to drop-ins.</li>
          <li>Priority support for transition to your production wallet.</li>
          <li>Member-only channels replete with strategic briefs.</li>
        </ul>
        <p className="muted" style={{ marginTop: "1rem" }}>
          We honor your chosen wallet and network with securely configured routing so the paywall protects premium content
          without you having to manage low-level details.
        </p>
      </div>
    </section>
  );
}
