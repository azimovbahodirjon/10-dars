import { useState, useEffect } from "react";

const getThemeFromLocal = () => {
    return localStorage.getItem("theme") || "light";
};

export function useTheme() {
    const [currentTheme, setCurrentTheme] = useState(getThemeFromLocal());

    const changeTheme = () => {
        setCurrentTheme((prev) => {
            return prev == "dracula" ? "light" : "dracula";
        });
    };

    useEffect(() => {
        localStorage.setItem("theme", currentTheme);
        document.documentElement.setAttribute("data-theme", currentTheme);
    }, [currentTheme]);

    return { changeTheme, currentTheme };
}