import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import {
  allCertificates,
  contacts,
  credentials,
  engineerStats,
  formats,
  inProgressEducation,
  mainMethod,
  methods,
  relationshipLevels,
  supervision,
} from "../data/content";

const tabs = [
  { id: "methods", label: "Методы" },
  { id: "education", label: "Образование" },
];

export default function About() {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState(
    searchParams.get("tab") === "education" ? "education" : "methods"
  );
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  return (
    <div>
      <div className="bg-sand-50 pt-5">
        <div className="mx-auto flex max-w-6xl gap-2 border-b border-sand-200 px-6 lg:px-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-1 pb-4 text-sm font-medium transition-colors ${
                activeTab === tab.id ? "text-sage-700" : "text-ink-700/50 hover:text-ink-900"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-sage-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      {activeTab === "methods" && (
        <div>
          <section className="bg-sand-50 pb-5 pt-7">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionHeading
                eyebrow="Методы"
                title="На что опираюсь в работе"
                description="Кратко о каждом подходе — чтобы было понятно, о чём речь, даже если вы никогда не были на терапии."
              />

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {methods.map((method) => (
                  <div key={method.title} className="rounded-2xl border border-sand-200 bg-white p-7">
                    <h3 className="text-lg text-ink-900">{method.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-ink-700/50">
                Всё это складывается в единый метод
              </p>
              <div className="mt-6 rounded-2xl border border-sage-300 bg-white p-8">
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-sage-600">
                  Основной метод
                </span>
                <h3 className="mt-3 text-xl text-ink-900">{mainMethod.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                  {mainMethod.description}
                </p>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionHeading
                eyebrow="Ключевая идея"
                title="Уровни взаимоотношений"
                description="Каждые отношения — с партнёром, родителем, коллегой или самим собой — можно расположить на шкале от контроля до подлинной близости. Работа в терапии часто заключается в том, чтобы осознанно двигаться по этой шкале."
              />

              <div className="relative mt-7">
                <div className="absolute left-4 top-0 hidden h-full w-px bg-sand-300 sm:block" />
                <div className="flex flex-col gap-6">
                  {relationshipLevels.map((item, index) => (
                    <div key={item.level} className="relative flex gap-6 sm:pl-0">
                      <div className="hidden sm:flex sm:w-8 sm:flex-none sm:items-start sm:justify-center">
                        <span className="z-10 flex h-8 w-8 items-center justify-center rounded-full border border-sage-400 bg-stone-50 text-xs font-medium text-sage-700">
                          {index + 1}
                        </span>
                      </div>
                      <div className="flex-1 rounded-2xl border border-sand-200 bg-white p-6">
                        <h3 className="text-lg text-ink-900">{item.level}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="bg-sand-50 py-10">
            <div className="mx-auto grid max-w-6xl gap-6 px-6 md:grid-cols-2 md:items-start lg:px-8">
              <div>
                <div className="mb-8 overflow-hidden rounded-2xl bg-ink-900">
                  <img
                    src="/images/site/selfimages-illustration.jpg"
                    alt="Образы Я"
                    className="aspect-square w-full object-cover opacity-90"
                  />
                </div>
                <SectionHeading eyebrow="Концепция" title="Образы Я" />
                <p className="mt-6 text-base leading-relaxed text-ink-700/70">
                  У каждого из нас — не одно цельное «Я», а множество образов: то, каким я бываю
                  с родителями, каким становлюсь на работе, каким остаюсь наедине с собой. Часть этих
                  образов сформирована подлинными потребностями, часть — заимствована извне: ожиданиями
                  семьи, общества, пережитым опытом.
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-700/70">
                  Работа с образами Я — это процесс различения: где реальное «я хочу», а где — эхо
                  чужого мнения, которое давно перестало быть актуальным. Именно об этом девиз
                  «Из паутины чужих мнений — к себе. Настоящему»: терапия помогает распутать эти слои
                  и вернуть контакт с собственной, а не заимствованной жизнью.
                </p>
              </div>

              <div className="rounded-2xl border border-sand-200 bg-sage-50 p-8">
                <h3 className="text-lg text-ink-900">Как строится работа</h3>
                <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed text-ink-700/70">
                  <li>— Определяем реальный запрос, стоящий за симптомом</li>
                  <li>— Исследуем, какому образу Я принадлежит проблемная реакция</li>
                  <li>— Прослеживаем связь с текущим уровнем взаимоотношений</li>
                  <li>— Ищем сценарии из детства, которые удерживают паттерн</li>
                  <li>— Формируем новый, устойчивый способ реагирования</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="py-10">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <SectionHeading eyebrow="Форматы" title="Форматы встреч" />

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {formats.map((format) => (
                  <div key={format.title} className="rounded-2xl border border-sand-200 bg-white p-7">
                    <h3 className="text-lg text-ink-900">{format.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                      {format.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-700/80">
                  Рабочие часы: <span className="font-medium text-ink-900">{contacts.workingHours}</span>
                </p>
                <Link
                  to="/booking"
                  className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
                >
                  Записаться на консультацию
                </Link>
              </div>

              <div className="mt-8 flex flex-col items-start gap-2 rounded-2xl border border-sand-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-ink-700/80">Также веду очные группы в Москве.</p>
                <Link
                  to="/groups"
                  className="rounded-full border border-sage-400 px-6 py-2.5 text-sm font-medium text-sage-700 transition-colors hover:bg-sage-50"
                >
                  Смотреть группы →
                </Link>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <SectionHeading
                eyebrow="Путь к профессии"
                title="От инженера к психологу"
                description="Первое образование — инженер-строитель (Мордовский государственный университет им. Н. П. Огарёва, 2005–2011). Несколько лет я мыслил категориями расчётов, нагрузок и несущих конструкций — и, кажется, эта настройка мышления никуда не делась, когда я пришёл в психологию."
              />

              <div>
                <p className="text-base leading-relaxed text-ink-700/70">
                  В инженерии нельзя укрепить фасад, если трещина идёт по фундаменту — сначала находишь
                  несущую конструкцию, потом работаешь с ней. Тот же принцип я использую в терапии:
                  не подпираю симптом, а ищу опорную точку — сценарий, образ Я или реакцию, — на которой
                  держится вся проблема. Отсюда и системность, о которой чаще всего говорят клиенты.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-6">
                  {engineerStats.map((stat) => (
                    <div key={stat.label}>
                      <p className="font-serif text-3xl text-sage-700">{stat.value}</p>
                      <p className="mt-1 text-sm font-medium text-ink-900">{stat.label}</p>
                      <p className="mt-0.5 text-xs text-ink-700/60">{stat.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {activeTab === "education" && (
        <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
          <SectionHeading
            eyebrow="Квалификация"
            title="Образование и сертификаты"
            description="Помимо базового психологического образования — регулярное повышение квалификации по смежным направлениям: от психосоматики до сексологии и коучинга."
          />

          <div className="mt-6 inline-flex items-baseline gap-3 rounded-2xl border border-sage-300 bg-white px-6 py-5">
            <span className="font-serif text-3xl text-sage-700">1300+</span>
            <span className="text-sm text-ink-700/70">часов профессионального обучения и повышения квалификации</span>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-ink-700/50">
            Сейчас учусь
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {inProgressEducation.map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-sage-300 bg-white p-6">
                <span className="mb-2 inline-flex w-fit items-center rounded-full bg-sage-100 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-sage-700">
                  В процессе
                </span>
                <h3 className="text-sm leading-snug text-ink-900">{item.title}</h3>
                <p className="mt-2 text-xs text-ink-700/60">{item.issuer}</p>
                <p className="mt-1 text-xs font-medium text-sage-700">{item.meta}</p>
                {item.file && (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-sage-300 px-4 py-1.5 text-xs font-medium text-sage-700 transition-colors hover:bg-sage-50"
                  >
                    Посмотреть справку →
                  </a>
                )}
              </div>
            ))}

            <div className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6">
              <h3 className="text-sm leading-snug text-ink-900">{supervision.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-ink-700/60">{supervision.description}</p>
            </div>
          </div>

          <p className="mt-5 text-sm font-medium uppercase tracking-[0.15em] text-ink-700/50">
            Пройденные курсы и сертификаты
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {credentials.map((item) => (
              <div key={item.title} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-6">
                <h3 className="text-sm leading-snug text-ink-900">{item.title}</h3>
                <p className="mt-2 text-xs text-ink-700/60">{item.issuer}</p>
                <p className="mt-1 text-xs font-medium text-sage-700">{item.meta}</p>
                {item.file && (
                  <a
                    href={item.file}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-sage-300 px-4 py-1.5 text-xs font-medium text-sage-700 transition-colors hover:bg-sage-50"
                  >
                    Посмотреть сертификат →
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => setShowAllCertificates((v) => !v)}
              className="text-sm font-medium text-sage-700 hover:text-sage-800"
            >
              {showAllCertificates
                ? "Скрыть остальные сертификаты ↑"
                : `Показать ещё сертификаты (${allCertificates.length}) →`}
            </button>

            {showAllCertificates && (
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {allCertificates.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center justify-between gap-3 rounded-xl border border-sand-200 bg-white px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-xs text-ink-900" title={item.title}>
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[11px] text-ink-700/50">{item.meta}</p>
                    </div>
                    <a
                      href={item.file}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-none text-xs font-medium text-sage-700 hover:text-sage-800"
                    >
                      Смотреть →
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
