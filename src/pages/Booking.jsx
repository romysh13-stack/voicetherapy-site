import SectionHeading from "../components/SectionHeading";
import YandexForm from "../components/YandexForm";
import { contacts } from "../data/content";

export default function Booking() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-10 lg:px-8">
      <SectionHeading
        eyebrow="Запись на консультацию"
        title="Расскажите немного о себе"
        description="Заполните анкету — я свяжусь с вами в удобном формате в рабочие часы, чтобы договориться о встрече. Либо напишите напрямую в мессенджер."
      />

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={contacts.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Написать в WhatsApp
        </a>
        <a
          href={contacts.telegram}
          target="_blank"
          rel="noreferrer"
          className="flex flex-1 items-center justify-center gap-2 rounded-full bg-[#26A5E4] px-6 py-3.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Написать в Telegram
        </a>
      </div>

      <div className="mt-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-sand-200" />
        <span className="text-xs uppercase tracking-[0.2em] text-ink-700/50">или заполните анкету</span>
        <div className="h-px flex-1 bg-sand-200" />
      </div>

      <div className="mt-5">
        <YandexForm formId="669e41ade010dba3b125f60b" title="Анкета записи на консультацию" />
      </div>

      <p className="mt-6 text-xs text-ink-700/50">
        Рабочие часы: {contacts.workingHours}. Отправляя анкету, вы соглашаетесь на обработку
        персональных данных в целях связи с вами.
      </p>
    </section>
  );
}
