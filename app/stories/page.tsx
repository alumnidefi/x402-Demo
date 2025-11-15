import ArticleCard from "@/components/ArticleCard";
import { premiumArticles } from "@/lib/articles";

export default function StoriesPage() {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <p className="pill">Stories</p>
          <h2>Pay-per-article briefing</h2>
        </div>
        <p>Click through to a live paywall, complete the x402 flow, and unlock a base-sepolia testnet dispatch.</p>
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
          />
        ))}
      </div>
    </section>
  );
}
