function applyLanguage(lang) {
    document.documentElement.lang = lang; // muda o <html lang="">

    const items = document.querySelectorAll("[id]");

    items.forEach(el => {
        const key = el.id;
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);

    document.getElementById("langToggle").textContent = lang === "pt" ? "EN" : "PT";
}


function detectLanguage() {
    const saved = localStorage.getItem("lang");

    if (saved) return applyLanguage(saved);

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("pt")) {
        applyLanguage("pt");
    } else {
        applyLanguage("en");
    }
}


// Botão para trocar idioma
document.addEventListener("DOMContentLoaded", () => {
    detectLanguage();

    document.getElementById("langToggle").addEventListener("click", () => {
        const current = localStorage.getItem("lang") || "pt";
        const newLang = current === "pt" ? "en" : "pt";
        applyLanguage(newLang);
    });
});
