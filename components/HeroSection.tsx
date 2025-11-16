import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="pill hero-pill">Your Favorite Sports Coverage</p>
          <h1>Clean garnet + gold storytelling without the noise.</h1>
          <p>
            Each dispatch has its own curated toll—$0.05 flashes and a $5 Premium Drop highlighting Coach Norvell.
            The white canvas keeps the experience light while the garnet accent keeps it bold.
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
            Deciding whether Norvell survives the boosters’ scrutiny? One $5 payment opens the dossier and locker-room tape.
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
