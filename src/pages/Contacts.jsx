import SectionHeading from "../components/SectionHeading";
import { contacts } from "../data/content";

const socials = [
  { label: "Instagram", href: contacts.instagram },
  { label: "YouTube", href: contacts.youtube },
  { label: "Telegram", href: contacts.telegram },
  { label: "Яндекс Дзен", href: contacts.yandexZen },
];

export default function Contacts() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-10 lg:px-8">
      <div className="mb-12 grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-center">
        <div className="mx-auto w-full max-w-xs overflow-hidden rounded-[2rem] bg-sand-200 shadow-xl shadow-ink-900/10 md:mx-0 md:max-w-none">
          <img
            src="/images/site/closing-roman-photo.jpg"
            alt="Роман Кузнецов"
            className="aspect-[4/5] w-full object-cover"
          />
        </div>
        <SectionHeading
          eyebrow="Контакты"
          title="Свяжитесь со мной удобным способом"
          description="Отвечаю в рабочие часы — постараюсь ответить как можно быстрее."
        />
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-sand-200 bg-white p-8">
          <h3 className="text-lg text-ink-900">Прямая связь</h3>
          <div className="mt-5 flex flex-col gap-4 text-sm">
            <a href={contacts.phoneHref} className="flex items-center justify-between text-ink-700/80 hover:text-sage-700">
              <span>Телефон</span>
              <span className="font-medium text-ink-900">{contacts.phone}</span>
            </a>
            <a href={`mailto:${contacts.email}`} className="flex items-center justify-between text-ink-700/80 hover:text-sage-700">
              <span>Email</span>
              <span className="font-medium text-ink-900">{contacts.email}</span>
            </a>
            <div className="flex items-center justify-between text-ink-700/80">
              <span>Часы работы</span>
              <span className="font-medium text-ink-900">{contacts.workingHours}</span>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={contacts.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              WhatsApp
            </a>
            <a
              href={contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#26A5E4] px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Telegram
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8">
          <h3 className="text-lg text-ink-900">Социальные сети</h3>
          <p className="mt-2 text-sm text-ink-700/70">
            Материалы о психологии, взаимоотношениях и работе с собой.
          </p>
          <div className="mt-5 flex flex-col gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-sand-200 bg-white px-5 py-3 text-sm text-ink-700/80 transition-colors hover:border-sage-400 hover:text-sage-700"
              >
                {social.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-sand-200 bg-white p-8">
        <h3 className="text-lg text-ink-900">Место встречи</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-700/70">
          Живые консультации проходят в центре Москвы. Точный адрес и удобное время
          согласуем индивидуально после записи.
        </p>
      </div>
    </section>
  );
}
