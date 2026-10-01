import SectionHeading from "../../components/SectionHeading";
import YandexForm from "../../components/YandexForm";
import { contacts } from "../../data/content";

export default function BookingEn() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Book a consultation"
        title="Tell me a little about yourself"
        description="Fill in the form and I'll get back to you during working hours to arrange a time. Or message me directly."
      />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={contacts.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Message on WhatsApp
        </a>
        <a
          href={contacts.telegram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#26A5E4] px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Message on Telegram
        </a>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-sand-200" />
        <span className="text-xs uppercase tracking-[0.2em] text-ink-700/50">or fill in the form</span>
        <div className="h-px flex-1 bg-sand-200" />
      </div>

      <div className="mt-5">
        <YandexForm formId="669e41ade010dba3b125f60b" title="Booking form" />
      </div>

      <p className="mt-4 text-xs text-ink-700/50">
        Note: the form itself is in Russian, but you're welcome to write your message in English —
        I'll understand it.
      </p>

      <p className="mt-2 text-xs text-ink-700/50">
        Working hours: 9:00–19:00 (GMT+3, Moscow). By submitting the form you agree to the
        processing of your personal data for the purpose of contacting you.
      </p>
    </section>
  );
}
