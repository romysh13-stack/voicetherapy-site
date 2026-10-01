import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { homeHighlights, testimonials, workTopics } from "../data/content";

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage-50 via-stone-50 to-stone-50" />
        <div className="mx-auto max-w-6xl px-6 pb-5 pt-5 sm:pt-7 lg:px-8">
          <div className="flex items-start gap-5 sm:gap-8 md:gap-6">
            <div className="flex flex-1 flex-col items-start gap-4 sm:gap-8">
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-sage-600">
                Главная
              </span>
              <h1 className="text-2xl leading-tight text-ink-900 sm:text-5xl lg:text-6xl">
                Из паутины чужих мнений — <span className="text-sage-700">к себе.</span> Настоящему
              </h1>
              <p className="max-w-2xl text-sm leading-relaxed text-ink-700/80 sm:text-lg">
                Здравствуйте, меня зовут Роман Кузнецов, психолог, член ОППЛ, ОППЧП «Основа» и других
                сообществ профессионалов. Помогаю разобраться с трудностями взаимодействия с людьми,
                миром и самим собой — там, где привычные способы справляться уже не работают.
              </p>
            </div>

            <div className="relative w-24 flex-none overflow-hidden rounded-2xl bg-sand-200 shadow-xl shadow-ink-900/10 sm:w-56 sm:rounded-[2rem] md:w-72 lg:w-80">
              <img
                src="/images/site/hero-roman.png"
                alt="Роман Кузнецов"
                className="aspect-[3/4] h-full w-full object-cover object-[50%_90%]"
              />
              <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-ink-900/70 to-transparent pb-3 pt-8">
                <img
                  src="/images/site/logo-voicetherapy.png"
                  alt="Voice Therapy"
                  className="h-5 w-auto opacity-95 sm:h-7"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/booking"
              className="rounded-full bg-sage-600 px-8 py-3.5 text-center text-sm font-medium text-white transition-colors hover:bg-sage-700"
            >
              Записаться на консультацию
            </Link>
            <Link
              to="/about"
              className="rounded-full border border-sand-300 px-8 py-3.5 text-center text-sm font-medium text-ink-900 transition-colors hover:border-sage-400 hover:text-sage-700"
            >
              Узнать о подходе
            </Link>
            <Link
              to="/about?tab=education"
              className="rounded-full border border-sand-300 px-8 py-3.5 text-center text-sm font-medium text-ink-900 transition-colors hover:border-sage-400 hover:text-sage-700"
            >
              Квалификация
            </Link>
          </div>
        </div>
      </section>

      <section id="topics" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-10 lg:px-8">
        <SectionHeading
          eyebrow="С чем я работаю"
          title="Основные темы работы"
          description="Каждый запрос индивидуален, но чаще всего в основе лежат одни и те же процессы."
        />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {workTopics.map((topic) => (
            <div
              key={topic.title}
              className="rounded-2xl border border-sand-200 bg-white/60 p-7 transition-colors hover:border-sage-300"
            >
              <h3 className="text-xl text-ink-900">{topic.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{topic.description}</p>
              {topic.hooks && (
                <ul className="mt-4 flex flex-col gap-1.5 border-t border-sand-200 pt-4">
                  {topic.hooks.map((hook) => (
                    <li key={hook} className="text-xs italic leading-relaxed text-ink-700/50">
                      {hook}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand-50 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading
            eyebrow="Отзывы"
            title="Что говорят клиенты"
            align="left"
          />

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <figure
                key={item.name}
                className="flex flex-col justify-between rounded-2xl border border-sand-200 bg-white p-8"
              >
                <blockquote className="text-sm leading-relaxed text-ink-700/80">
                  «{item.text}»
                </blockquote>
                <figcaption className="mt-6 text-sm font-medium text-sage-700">
                  {item.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="relative h-[480px] w-full sm:h-[560px] lg:h-[620px]">
          <img
            src="/images/site/quote-section-bg.jpg"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-[50%_60%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 px-6 pb-5 text-center sm:pb-7 lg:px-8">
            <p className="mx-auto max-w-2xl font-serif text-xl leading-relaxed text-white sm:text-2xl">
              «Каждый путешественник в конце концов понимает, что самое интересное
              путешествие — это внутрь себя»
            </p>
            <p className="mt-4 text-sm uppercase tracking-[0.25em] text-white/70">
              Роман Кузнецов
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionHeading eyebrow="Узнать больше" title="Куда двигаться дальше" />

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {homeHighlights.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group flex flex-col justify-between rounded-2xl border border-sand-200 bg-white p-6 transition-colors hover:border-sage-300"
            >
              <div>
                <h3 className="text-base text-ink-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                  {item.description}
                </p>
              </div>
              <span className="mt-6 text-sm font-medium text-sage-700 group-hover:text-sage-800">
                {item.cta} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 text-center lg:px-8">
        <h2 className="text-3xl text-ink-900 sm:text-4xl">
          Готовы сделать первый шаг?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink-700/70">
          Запишитесь на консультацию — очно в центре Москвы или онлайн, в удобном для вас формате.
        </p>
        <Link
          to="/booking"
          className="mt-8 inline-block rounded-full bg-sage-600 px-8 py-3.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
        >
          Записаться на консультацию
        </Link>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-sand-200 bg-white/60 p-6 text-left">
          <h3 className="text-sm font-medium text-ink-900">Как проходит первая встреча</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
            Первая встреча — это знакомство и сбор информации о вашем запросе. Настоящая глубина
            работы обычно раскрывается к 3–5 сессии — и доходят до этого не все, это нормально.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
            Все встречи проходят в рамках{" "}
            <a
              href="/certificates/eticheskiy-kodeks.pdf"
              target="_blank"
              rel="noreferrer"
              className="font-medium text-sage-700 underline hover:text-sage-800"
            >
              профессионального этического кодекса психолога
            </a>{" "}
            и соглашения о конфиденциальности (ссылка на него есть в анкете записи).
          </p>
        </div>
      </section>
    </div>
  );
}
