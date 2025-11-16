import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill">The Battle's End · x402 Dispatch</p>
          <h1>
            Modern investigative hoops reporting with builder-grade paywalls.
          </h1>
          <p>
            Stories drop behind curated tolls — $0.05 flashes and a $1 Norvell dossier — so you only pay for what you care about.
            The black-and-gold aesthetic nods to the briefing room while the layout stays clean and modern.
          </p>
          <div className="hero-meta">
            <div>
              <strong>$0.05</strong>
              Basketball headlines & recruiting flashes
            </div>
            <div>
              <strong>$1.00</strong>
              Coach Norvell on the Hotseat
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <p className="hero-panel-label">Live paywall</p>
          <h4>Coach Norvell on the Hotseat</h4>
          <p>
            Decide today whether the coach keeps his seat or the boosters lose patience. $1 unlocks the full dossier and behind-the-scenes chatter.
          </p>
          <div className="hero-panel-footer">
            <span>Base Sepolia · x402 facilitator</span>
            <Link href="/stories/coach-norvell-hotseat" className="hero-cta">
              Open paywall
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
