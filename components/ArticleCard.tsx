type ArticleCardProps = {
  title: string;
  excerpt: string;
  tag: string;
  date: string;
  href: string;
  badge?: string;
};

export default function ArticleCard({ title, excerpt, tag, date, href, badge }: ArticleCardProps) {
  return (
    <article className="card article-card">
      <span className="badge">{tag}</span>
      <h3>{title}</h3>
      <p className="muted">{excerpt}</p>
      <div className="stack" style={{ marginTop: "auto" }}>
        <small className="muted">{date}</small>
        <a href={href} className="cta-button">
          Read now · $1
        </a>
        {badge ? (
          <span className="pill" style={{ marginTop: "0.5rem" }}>
            {badge}
          </span>
        ) : null}
      </div>
    </article>
  );
}
