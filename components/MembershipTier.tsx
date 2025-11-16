import Link from "next/link";

type MembershipTierProps = {
  name: string;
  price: string;
  tagline: string;
  perks: string[];
  accent?: boolean;
  href?: string;
};

export default function MembershipTier({ name, price, tagline, perks, accent, href }: MembershipTierProps) {
  return (
    <article className={`card membership-tier ${accent ? "gold-border" : ""}`}>
      <div className="stack">
        <span className="badge">{name}</span>
        <h3>{price}</h3>
        <p className="muted">{tagline}</p>
      </div>
      <ul>
        {perks.map((perk) => (
          <li key={perk} className="muted">
            {perk}
          </li>
        ))}
      </ul>
      <Link href={href ?? "/stories/membership-tier"} className="cta-button">
        Join the Ranks
      </Link>
    </article>
  );
}
