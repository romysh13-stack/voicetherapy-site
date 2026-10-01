import { contacts } from "../data/content";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href={contacts.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.43 1.32 4.92L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.16c-.24.68-1.4 1.3-1.93 1.38-.5.08-1.12.11-1.81-.11-.42-.13-.95-.3-1.64-.6-2.88-1.24-4.76-4.14-4.9-4.33-.14-.19-1.17-1.56-1.17-2.98 0-1.41.74-2.11 1-2.4.26-.29.57-.36.76-.36.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.1.19-.15.31-.29.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.29.75 1.24 1.61 2.01 1.11.99 2.05 1.3 2.34 1.44.29.14.46.12.63-.07.17-.19.72-.84.91-1.13.19-.29.38-.24.63-.14.26.1 1.64.77 1.92.91.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
        </svg>
      </a>
      <a
        href={contacts.telegram}
        target="_blank"
        rel="noreferrer"
        aria-label="Написать в Telegram"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#26A5E4] text-white shadow-lg shadow-black/10 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
          <path d="M21.05 3.16 2.9 10.28c-1.24.5-1.23 1.19-.23 1.5l4.65 1.45 1.8 5.5c.22.6.4.84.81.84.4 0 .59-.18.82-.4l1.98-1.9 4.53 3.35c.83.46 1.44.22 1.65-.77l2.99-14.1c.3-1.2-.46-1.75-1.85-1.59Zm-2.9 3.5-7.67 6.93-.31 3.28-1.5-4.6 9.14-6.3c.42-.28.81-.13.47.15Z" />
        </svg>
      </a>
    </div>
  );
}
