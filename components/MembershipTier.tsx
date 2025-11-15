type MembershipTierProps = {
  name: string;
  price: string;
  tagline: string;
  perks: string[];
  accent?: boolean;
};

export default function MembershipTier({ name, price, tagline, perks, accent }: MembershipTierProps) {
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
      <button className="cta-button">Join the Ranks</button>
    </article>
  );
}
