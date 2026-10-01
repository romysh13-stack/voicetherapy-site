import { Link } from "react-router-dom";
import SectionHeading from "../components/SectionHeading";
import { pricingPlans, contacts, formats } from "../data/content";

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Стоимость"
        title="Стоимость услуг"
        description="Разовые консультации и абонементы очно и онлайн. Точный формат и длительность обсуждаем на первой встрече."
      />

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {pricingPlans.map((plan) => (
          <div
            key={plan.title}
            className="flex flex-col rounded-2xl border border-sand-200 bg-white p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-lg text-ink-900">{plan.title}</h3>
              <span className="whitespace-nowrap text-lg font-medium text-sage-700">
                {plan.price}
              </span>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wide text-sage-600">
              {plan.format}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-700/70">
              {plan.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-sage-200 bg-sage-50 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-700/80">
          Есть вопросы по формату или стоимости — просто напишите.
        </p>
        <Link
          to="/booking"
          className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
        >
          Записаться на консультацию
        </Link>
      </div>

      <div className="mt-5">
        <SectionHeading eyebrow="Форматы" title="Форматы встреч" />
      </div>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        {formats.map((format) => (
          <div key={format.title} className="rounded-2xl border border-sand-200 bg-white p-7">
            <h3 className="text-lg text-ink-900">{format.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-700/70">
              {format.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex flex-col items-start gap-2 rounded-2xl border border-sand-200 bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
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
    </section>
  );
}
