import { Link } from "react-router-dom";
import SectionHeading from "../../components/SectionHeading";

const pricingPlansEn = [
  { title: "Online consultation", format: "Single session", price: "3,500 ₽ / 55 min", description: "A one-off online session, format to suit you." },
  { title: "Online consultation", format: "Single session", price: "4,500 ₽ / 85 min", description: "An extended video session for deeper work on your request." },
  { title: "In-person consultation", format: "Single session, Moscow", price: "4,500 ₽ / 55 min", description: "An in-person session at the office in central Moscow." },
  { title: "In-person consultation", format: "Single session, Moscow", price: "5,500 ₽ / 85 min", description: "An extended in-person session at the office in central Moscow." },
  { title: "Online package", format: "Bundle of sessions", price: "25,000 ₽", description: "85-minute sessions. Structured work with a plan and progress toward a result." },
  { title: "In-person package", format: "Bundle of sessions, Moscow", price: "30,000 ₽", description: "85-minute sessions at the office in central Moscow." },
];

export default function PricingEn() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Pricing"
        title="Cost of services"
        description="Single consultations and packages, in person and online. We agree on the exact format and duration at the first meeting."
      />

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {pricingPlansEn.map((plan, i) => (
          <div
            key={`${plan.title}-${i}`}
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
          Questions about format or pricing? Just send a message.
        </p>
        <Link
          to="/en/booking"
          className="rounded-full bg-sage-600 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-sage-700"
        >
          Book a consultation
        </Link>
      </div>
    </section>
  );
}
