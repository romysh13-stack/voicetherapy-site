import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import MaterialsTabs from "../components/MaterialsTabs";
import AudioPlayer from "../components/AudioPlayer";
import { audioRecordings } from "../data/audio";
import { externalListening } from "../data/content";

export default function Audio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Материалы"
        title="Аудио"
        description="Некоторые темы легче слушать, чем читать. Короткие аудиозаписи по мотивам статей и живых мыслей из практики."
      />

      <div className="mt-5">
        <MaterialsTabs />
      </div>

      <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {audioRecordings.map((track) => (
          <div key={track.id} className="flex min-w-0 flex-col gap-3">
            <AudioPlayer src={track.src} title={track.title} />
            <p className="px-1 text-sm leading-relaxed text-ink-700/70">
              {track.description}
              {track.relatedSlug && (
                <>
                  {" "}
                  <Link
                    to={`/articles/${track.relatedSlug}`}
                    className="font-medium text-sage-700 hover:text-sage-800"
                  >
                    Читать текстовую версию →
                  </Link>
                </>
              )}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <SectionHeading eyebrow="Слушать также" title="Подкаст и сказки" />
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {externalListening.map((item) =>
            item.href ? (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col justify-between rounded-2xl border border-sand-200 bg-white p-7 transition-colors hover:border-sage-300"
              >
                <div>
                  <h3 className="text-lg text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-medium text-sage-700">
                  Открыть →
                </span>
              </a>
            ) : (
              <div
                key={item.title}
                className="flex flex-col justify-between rounded-2xl border border-dashed border-sand-300 bg-sand-50 p-7"
              >
                <div>
                  <h3 className="text-lg text-ink-900">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                    {item.description}
                  </p>
                </div>
                <span className="mt-6 text-sm font-medium text-ink-700/40">
                  Ссылка скоро появится
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
