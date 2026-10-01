import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { groupPrograms } from "../data/content";

export default function Groups() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-8 pt-5 lg:px-8">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-sage-600">
          Групповая терапия
        </span>
        <h1 className="mt-4 max-w-3xl text-4xl leading-tight text-ink-900 sm:text-5xl">
          Изучаем себя в отражении других
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-700/80">
          Личная терапия даёт язык, чтобы понимать себя. Группа даёт место, чтобы этот язык
          наконец заработал — среди живых людей, с их реакциями, болью и способами защищаться,
          а не в пересказе один на один с терапевтом.
        </p>
      </section>

      <section className="bg-sand-50 py-10">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <SectionHeading eyebrow="Чем это отличается" title="Почему группа, а не только личная терапия" />

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-sand-200 bg-white p-7">
              <h3 className="text-lg text-ink-900">Не пересказ, а практика здесь и сейчас</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                В личной терапии вы разбираете реакцию, которая случилась вчера. В группе она
                происходит прямо в комнате — и можно прожить её, а не только обсудить.
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-white p-7">
              <h3 className="text-lg text-ink-900">Другие люди — зеркало</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                То, что сложно разглядеть в себе, легко увидеть через реакции других на вас —
                и через свои реакции на них.
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-white p-7">
              <h3 className="text-lg text-ink-900">Конфликт не рвёт связь</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
                В группе можно поспорить, разозлиться, не согласиться — и остаться в контакте,
                разобраться, помириться. Это самое важное открытие для большинства участников.
              </p>
            </div>
          </div>

          <p className="mt-8 text-sm text-ink-700/60">
            Подробнее о личном опыте — в статье{" "}
            <Link to="/articles/gruppovaya-terapiya" className="font-medium text-sage-700 hover:text-sage-800">
              «Групповая терапия, как она работает?» →
            </Link>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
        <SectionHeading
          eyebrow="Расписание"
          title="Действующие группы"
          description="Очно, в центре Москвы. Набор идёт по мере комплектации — актуальный анонс и запись на b17.ru."
        />

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {groupPrograms.map((group) => (
            <div key={group.title} className="flex flex-col rounded-2xl border border-sand-200 bg-white p-7">
              <h3 className="text-lg text-ink-900">{group.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-700/70">{group.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-ink-700/50">
                <span>{group.format}</span>
                <span className="font-medium text-sage-700">{group.status}</span>
              </div>
              {group.href && (
                <a
                  href={group.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 text-sm font-medium text-sage-700 hover:text-sage-800"
                >
                  Анонс и запись на b17.ru →
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-700/80">
            Хотите узнать подробнее? Оставьте заявку, это бесплатно
          </p>
          <a
            href="https://www.b17.ru/voicetherapy_ru/#training"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
          >
            Записаться
          </a>
        </div>
      </section>
    </div>
  );
}
