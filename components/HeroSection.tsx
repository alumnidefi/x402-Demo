import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill hero-pill">The Battle's End Dispatch</p>
          <h1>Strategic hoops coverage in garnet and white.</h1>
          <p>
            Each dispatch has its own curated toll—$0.05 flashes and a $5 Premium Drop that unlocks Coach Norvell’s dossier.
            The clean palette mirrors the TBE aesthetic without calling out the payment tech.
          </p>
          <div className="hero-meta">
            <div>
              <strong>$0.05</strong>
              Recruiting flashes & basketball headlines
            </div>
            <div>
              <strong>$5.00</strong>
              Premium Drop: Coach Norvell
            </div>
          </div>
        </div>
        <div className="hero-panel">
          <p className="hero-panel-label">Live premium drop</p>
          <h4>Coach Norvell on the Hotseat</h4>
          <p>
            Decide whether Norvell survives the boosters’ scrutiny. One $5 payment opens the dossier and the locker-room tapes.
          </p>
          <div className="hero-panel-footer">
            <span>Live premium access</span>
            <Link href="/stories/coach-norvell-hotseat" className="hero-cta">
              Open paywall
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
