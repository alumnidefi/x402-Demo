export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill">The Battle's End · x402 Dispatch</p>
          <h1>
            Inside the front lines of modern college basketball, where every headline carries a $0.05 toll and every leak is guarded by x402.
          </h1>
          <p>
            Premium dispatches, recruiting dossiers, and Coach Norvell coverage now live behind programmable paywalls. Pay only for the story you need, at the price that matches its worth.
          </p>
          <div className="hero-meta">
            <div>
              <strong>$0.05</strong>
              Basketball headlines & recruiting flashes
            </div>
            <div>
              <strong>$1.00</strong>
              Coach Norvell on the Hotseat investigative drop
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <p className="hero-panel-label">Live paywall</p>
          <h4>Coach Norvell on the Hotseat</h4>
          <p>Decide today whether the coach keeps his seat or the boosters lose patience. $1 pays for the full dossier.</p>
          <div className="hero-panel-footer">
            <span>Base Sepolia · x402 facilitator</span>
            <button className="cta-button hero-cta">Test the paywall</button>
          </div>
        </div>
      </div>
    </section>
  );
}
