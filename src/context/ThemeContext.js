import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        // ... (mevcut kodun)
        try {
            return localStorage.getItem("theme") || "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {
        // Mevcut kodların burada...
        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch { }

        // ----- BURADAN İTİBAREN KODU EKLE -----
        const favicon = document.getElementById("favicon");
        if (favicon) {
            // Temaya göre doğru ikonu seç ve yolunu güncelle
            favicon.href = theme === 'dark'
                ? 'favicon-dark.ico'
                : 'favicon-light.ico';
        }
        // ----- EKLENECEK KODUN SONU -----

    }, [theme]);

    const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}