import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navItems = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "Методы" },
  { to: "/articles", label: "Статьи" },
  { to: "/audio", label: "Аудио" },
  { to: "/groups", label: "Группы" },
  { to: "/pricing", label: "Цены" },
  { to: "/contacts", label: "Контакты" },
];

const navItemsEn = [
  { to: "/en", label: "Home" },
  { to: "/en/about", label: "Approach" },
  { to: "/en/pricing", label: "Pricing" },
  { to: "/en/contacts", label: "Contacts" },
];

const RU_TO_EN = {
  "/": "/en",
  "/about": "/en/about",
  "/pricing": "/en/pricing",
  "/contacts": "/en/contacts",
  "/booking": "/en/booking",
};
const EN_TO_RU = {
  "/en": "/",
  "/en/about": "/about",
  "/en/pricing": "/pricing",
  "/en/contacts": "/contacts",
  "/en/booking": "/booking",
};

function NavLinks({ items, onClick = () => {}, className = "text-sm" }) {
  return (
    <>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === "/" || item.to === "/en"}
          onClick={onClick}
          className={({ isActive }) =>
            `whitespace-nowrap tracking-wide transition-colors ${className} ${
              isActive
                ? "text-sage-700 font-medium"
                : "text-ink-700/70 hover:text-sage-700"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isEn = location.pathname === "/en" || location.pathname.startsWith("/en/");

  const items = isEn ? navItemsEn : navItems;
  const homeTo = isEn ? "/en" : "/";
  const bookingTo = isEn ? "/en/booking" : "/booking";
  const switchTo = isEn
    ? EN_TO_RU[location.pathname] || "/"
    : RU_TO_EN[location.pathname] || "/en";

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200/70 bg-stone-50/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to={homeTo} className="flex flex-none flex-col leading-tight">
          <span className="font-serif text-sm text-ink-900 sm:text-base md:text-lg">Роман Кузнецов</span>
          <span className="text-[10px] uppercase tracking-[0.2em] text-sage-600 sm:text-xs">
            {isEn ? "Psychologist" : "Психолог"}
          </span>
        </NavLink>

        <div className="flex items-center justify-end gap-2">
          <nav className="hidden min-w-0 items-center gap-1.5 sm:flex md:gap-2 lg:gap-5 xl:gap-8">
            <NavLinks items={items} className="text-[11px] md:text-xs lg:text-sm" />
          </nav>

          <NavLink
            to={switchTo}
            className="flex-none rounded-full border border-sand-300 px-2 py-1 text-[10px] font-medium uppercase tracking-wide text-ink-700/70 transition-colors hover:border-sage-400 hover:text-sage-700 md:text-xs"
          >
            {isEn ? "RU" : "EN"}
          </NavLink>

          <NavLink
            to={bookingTo}
            className="btn-shine hidden flex-none rounded-full bg-sage-600 px-2.5 py-1.5 text-[11px] font-medium text-white transition-colors hover:bg-sage-700 sm:inline-block md:px-3 md:text-xs lg:px-5 lg:py-2.5 lg:text-sm"
          >
            {isEn ? "Book a session" : "Записаться"}
          </NavLink>

          <button
            type="button"
            aria-label="Открыть меню"
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 flex-none flex-col items-center justify-center gap-1.5 sm:hidden"
          >
            <span
              className={`block h-px w-6 bg-ink-900 transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink-900 transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-px w-6 bg-ink-900 transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-sand-200/70 bg-stone-50 px-6 pb-6 pt-2 sm:hidden">
          <nav className="flex flex-col gap-4">
            <NavLinks items={items} onClick={() => setOpen(false)} />
            <NavLink
              to={bookingTo}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-sage-600 px-5 py-2.5 text-center text-sm font-medium text-white"
            >
              {isEn ? "Book a session" : "Записаться"}
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
