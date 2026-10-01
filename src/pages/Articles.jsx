import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import MaterialsTabs from "../components/MaterialsTabs";
import { articles } from "../data/articles";

export default function Articles() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Материалы"
        title="Статьи"
        description="Заметки из практики: о реакциях, отношениях, сценариях из детства и о том, как возвращаться к себе настоящему."
      />

      <div className="mt-5">
        <MaterialsTabs />
      </div>

      <div className="mt-8 flex flex-col items-start gap-2 rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700/80">
          Все новые статьи выходят первыми на b17.ru — подпишитесь, чтобы не пропустить.
        </p>
        <a
          href="https://www.b17.ru/articles/voicetherapy_ru/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
        >
          Подписаться на b17.ru
        </a>
      </div>

      <div className="mt-5 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to={`/articles/${article.slug}`}
            className="group flex flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white transition-colors hover:border-sage-300"
          >
            <div className="aspect-[4/3] overflow-hidden bg-sand-100">
              <img
                src={article.image}
                alt={article.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3 p-6">
              <div className="flex items-center justify-between text-xs text-sage-600">
                <span className="uppercase tracking-wide">{article.category}</span>
                <span className="text-ink-700/50">{article.date}</span>
              </div>
              <h3 className="text-lg leading-snug text-ink-900">{article.title}</h3>
              <p className="line-clamp-3 text-sm leading-relaxed text-ink-700/70">
                {article.excerpt}
              </p>
              <span className="mt-auto text-sm font-medium text-sage-700">
                Читать далее →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
