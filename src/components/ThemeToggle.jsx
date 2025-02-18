// src/components/ThemeToggle.jsx
import { useEffect, useState } from "react";

const ThemeToggle = () => {
    const themes = ["light", "dark", "bumblebee", "luxury", "cyberpunk"];
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleThemeChange = (event) => {
        setTheme(event.target.value);
    };

    return (
        <select
            className="select select-bordered select-sm w-half max-w-xs"
            value={theme}
            onChange={handleThemeChange}
        >
            {themes.map((t) => (
                <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                </option>
            ))}
        </select>
    );
};

export default ThemeToggle;