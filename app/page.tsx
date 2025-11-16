import ArticleCard from "@/components/ArticleCard";
import HeroSection from "@/components/HeroSection";
import MembershipTier from "@/components/MembershipTier";
import { premiumArticles } from "@/lib/articles";

const tiers = [
  {
    name: "Garrison",
    price: "Free",
    tagline: "Standard dispatches, newsletter, and community status.",
    perks: ["Weekly briefings", "Access to mission cryptic transcripts", "Invites to open salons"],
  },
  {
    name: "Field Marshal",
    price: "$12 / month",
    tagline: "Deep-dive briefs, embed notebooks, and early intel.",
    perks: [
      "Bi-weekly strategic reports",
      "Priority entry to live Q&As",
      "Bonus archival audio mixes",
    ],
    accent: true,
  },
  {
    name: "Oracle",
    price: "$35 / month",
    tagline: "All access to archive, strategies, and private advisory channel.",
    perks: [
      "On-demand analyst calls",
      "Mission vault access",
      "Discounts on pay-per-article drops",
    ],
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section section--compressed">
        <div className="section-heading">
          <div>
            <p className="pill">Paywall issues</p>
            <h2>Menu of locked dispatches</h2>
          </div>
          <p>
            Each dispatch drops with its own x402 price. Click through to the paywall, authorize the
            signature, and the article greys back into focus.
          </p>
        </div>
        <div className="article-grid">
          {premiumArticles.map((article) => (
            <ArticleCard
              key={article.slug}
              title={article.title}
              excerpt={article.excerpt}
              tag={article.tag}
              date={article.date}
              href={`/stories/${article.slug}`}
              badge={article.badge}
              price={article.price}
            />
          ))}
        </div>
      </section>

      <section className="section section--membership">
        <div className="section-heading">
          <div>
            <p className="pill">Membership</p>
            <h2>Join the front line</h2>
          </div>
          <p>Membership tiers unlock curated dispatches, bonus audio, and community strategy sessions.</p>
        </div>
        <div className="membership-grid">
          {tiers.map((tier) => (
            <MembershipTier
              key={tier.name}
              name={tier.name}
              price={tier.price}
              tagline={tier.tagline}
              perks={tier.perks}
              accent={tier.accent}
            />
          ))}
        </div>
      </section>
    </>
  );
}
