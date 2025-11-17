type ArticleCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  href: string;
  badge?: string;
  displayPrice: string;
};

export default function ArticleCard({ title, excerpt, tag, date, href, badge, displayPrice }: ArticleCardProps) {
  return (
    <article className="card article-card">
      <div className="article-tagline">
        <span className="badge">{tag}</span>
        <span className="price-tag">{displayPrice}</span>
      </div>
      <h3>{title}</h3>
      <p className="muted">{excerpt}</p>
      <div className="article-card-footer">
        <small className="muted">{date}</small>
        <div className="article-actions">
          <a href={href} className="article-cta">
            Open paywall
          </a>
          {badge ? (
            <span className="pill article-pill" aria-label={badge}>
              {badge}
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
