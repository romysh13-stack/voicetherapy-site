import { NavLink } from "react-router-dom";

const tabs = [
  { to: "/articles", label: "Текстовые статьи" },
  { to: "/audio", label: "Аудио и подкасты" },
];

export default function MaterialsTabs() {
  return (
    <div className="flex gap-2 border-b border-sand-200">
      {tabs.map((tab) => (
        <NavLink
          key={tab.to}
          to={tab.to}
          className={({ isActive }) =>
            `relative px-1 pb-4 text-sm font-medium transition-colors ${
              isActive
                ? "text-sage-700"
                : "text-ink-700/50 hover:text-ink-900"
            }`
          }
        >
          {({ isActive }) => (
            <>
              {tab.label}
              {isActive && (
                <span className="absolute inset-x-0 -bottom-px h-0.5 bg-sage-600" />
              )}
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
}
