import { Link, useLocation } from "react-router-dom";
import { contacts } from "../data/content";

export default function Footer() {
  const location = useLocation();
  const isEn = location.pathname === "/en" || location.pathname.startsWith("/en/");

  return (
    <footer className="border-t border-sand-200/70 bg-sand-50">
      <div className="mx-auto max-w-6xl px-6 py-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div>
            <img
              src="/images/site/logo-voicetherapy.png"
              alt="Voice Therapy"
              className="mb-3 h-8 w-auto opacity-90"
            />
            <p className="font-serif text-lg text-ink-900">Роман Кузнецов</p>
            <p className="mt-1 text-sm text-ink-700/70">
              {isEn
                ? "Psychologist. Online and in-person sessions in Moscow"
                : "Психолог. Консультации онлайн и очно в Москве"}
            </p>
            <p className="mt-4 max-w-xs text-sm italic text-sage-700">
              {isEn
                ? "“From the web of others’ opinions — to yourself. The present.”"
                : "«Из паутины чужих мнений — к себе. Настоящему»"}
            </p>
          </div>

          {isEn ? (
            <div>
              <p className="text-sm font-medium text-ink-900">Navigation</p>
              <nav className="mt-3 flex flex-col gap-2 text-sm text-ink-700/70">
                <Link to="/en" className="hover:text-sage-700">Home</Link>
                <Link to="/en/about" className="hover:text-sage-700">Approach</Link>
                <Link to="/en/pricing" className="hover:text-sage-700">Pricing</Link>
                <Link to="/en/contacts" className="hover:text-sage-700">Contacts</Link>
              </nav>
            </div>
          ) : (
            <div>
              <p className="text-sm font-medium text-ink-900">Навигация</p>
              <nav className="mt-3 flex flex-col gap-2 text-sm text-ink-700/70">
                <Link to="/" className="hover:text-sage-700">Главная</Link>
                <Link to="/about" className="hover:text-sage-700">Методы</Link>
                <Link to="/articles" className="hover:text-sage-700">Статьи</Link>
                <Link to="/audio" className="hover:text-sage-700">Аудио</Link>
                <Link to="/groups" className="hover:text-sage-700">Группы</Link>
                <Link to="/pricing" className="hover:text-sage-700">Цены</Link>
                <Link to="/contacts" className="hover:text-sage-700">Контакты</Link>
              </nav>
            </div>
          )}

          <div>
            <p className="text-sm font-medium text-ink-900">{isEn ? "Contact" : "Связаться"}</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-ink-700/70">
              <a href={contacts.phoneHref} className="hover:text-sage-700">{contacts.phone}</a>
              <a href={`mailto:${contacts.email}`} className="hover:text-sage-700">{contacts.email}</a>
              <p>{isEn ? "9:00–19:00 (GMT+3, Moscow)" : contacts.workingHours}</p>
            </div>
          </div>
        </div>

        <div className="mt-5 border-t border-sand-200/70 pt-6 text-xs text-ink-700/50">
          <p>{isEn ? "© 2022 Roman Kuznetsov. All rights reserved." : "© 2022 Роман Кузнецов. Все права защищены."}</p>
        </div>
      </div>
    </footer>
  );
}
