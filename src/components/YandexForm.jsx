import { useEffect } from "react";

const EMBED_SCRIPT_SRC = "https://forms.yandex.ru/_static/embed.js";

function loadEmbedScriptOnce() {
  if (document.querySelector(`script[src="${EMBED_SCRIPT_SRC}"]`)) return;
  const script = document.createElement("script");
  script.src = EMBED_SCRIPT_SRC;
  script.async = true;
  document.body.appendChild(script);
}

export default function YandexForm({ formId, title = "Анкета записи" }) {
  useEffect(() => {
    loadEmbedScriptOnce();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-sand-200 bg-white">
      <iframe
        src={`https://forms.yandex.ru/cloud/${formId}?iframe=1`}
        frameBorder="0"
        name={`ya-form-${formId}`}
        title={title}
        width="100%"
        height="720"
        className="block"
      />
    </div>
  );
}
