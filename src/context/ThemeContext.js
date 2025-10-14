import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {

        try {
            return localStorage.getItem("theme") || "dark";
        } catch {
            return "dark";
        }
    });

    useEffect(() => {

        document.documentElement.setAttribute("data-theme", theme);
        try {
            localStorage.setItem("theme", theme);
        } catch { }


        const favicon = document.getElementById("favicon");
        if (favicon) {

            favicon.href = theme === 'dark'
                ? 'favicon-dark.ico'
                : 'favicon-light.ico';
        }


    }, [theme]);

    const toggle = () => setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {children}
        </ThemeContext.Provider>
    );
}