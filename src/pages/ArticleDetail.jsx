import { Link, Navigate, useParams } from "react-router-dom";
import { articles, getArticleBySlug } from "../data/articles";
import { contacts } from "../data/content";

function ArticleBody({ content }) {
  const blocks = [];
  let listItems = [];

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push(
        <ul key={`list-${blocks.length}`} className="flex flex-col gap-2 pl-5 text-base leading-relaxed text-ink-700/80">
          {listItems.map((item, i) => (
            <li key={i} className="list-disc">
              {item}
            </li>
          ))}
        </ul>
      );
      listItems = [];
    }
  };

  content.forEach((line, index) => {
    if (line.startsWith("## ")) {
      flushList();
      blocks.push(
        <h2 key={index} className="text-2xl text-ink-900">
          {line.slice(3)}
        </h2>
      );
    } else if (line.startsWith("- ")) {
      listItems.push(line.slice(2));
    } else {
      flushList();
      blocks.push(
        <p key={index} className="text-base leading-relaxed text-ink-700/80">
          {line}
        </p>
      );
    }
  });
  flushList();

  return <div className="flex flex-col gap-5">{blocks}</div>;
}

export default function ArticleDetail() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/articles" replace />;
  }

  const otherArticles = articles.filter((a) => a.slug !== slug).slice(0, 3);

  return (
    <article className="mx-auto max-w-3xl px-6 py-8 lg:px-8">
      <Link to="/articles" className="text-sm font-medium text-sage-700 hover:text-sage-800">
        ← Все статьи
      </Link>

      <div className="mt-6 flex items-center justify-between text-xs text-sage-600">
        <span className="uppercase tracking-wide">{article.category}</span>
        <span className="text-ink-700/50">{article.date}</span>
      </div>

      <h1 className="mt-4 text-3xl leading-tight text-ink-900 sm:text-4xl">
        {article.title}
      </h1>

      <div className="mt-8 overflow-hidden rounded-2xl bg-sand-100">
        <img src={article.image} alt={article.title} className="w-full object-cover" />
      </div>

      <div className="mt-5">
        <ArticleBody content={article.content} />
      </div>

      {article.gallery && article.gallery.length > 1 && (
        <div className="mt-5 grid grid-cols-3 gap-3">
          {article.gallery.map((src) => (
            <img key={src} src={src} alt="" className="aspect-[3/4] rounded-xl object-cover" />
          ))}
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-sage-200 bg-sage-50 p-6 text-center">
        <p className="text-sm text-ink-700/80">
          Откликается? Обсудим вашу ситуацию на консультации.
        </p>
        <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/booking"
            className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
          >
            Записаться на консультацию
          </Link>
          <a
            href={contacts.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-sand-300 px-6 py-2.5 text-sm font-medium text-ink-900 transition-colors hover:border-sage-400"
          >
            Написать в WhatsApp
          </a>
        </div>
      </div>

      {otherArticles.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl text-ink-900">Другие статьи</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {otherArticles.map((item) => (
              <Link
                key={item.slug}
                to={`/articles/${item.slug}`}
                className="group flex flex-col gap-3"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-xl bg-sand-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-sm leading-snug text-ink-900 group-hover:text-sage-700">
                  {item.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
