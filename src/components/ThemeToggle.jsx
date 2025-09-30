import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PT, US } from 'country-flag-icons/react/3x2'

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme == "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

        setCurrentLang(localStorage.getItem("userLang"));
    }, [])

    const handleLanguage = (lang) => {
        localStorage.setItem("userLang", lang);
        location.reload();
    }

    const ToggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }

    return (
        <div className="fixed top-5 right-5 z-50 p-2 justify-between w-auto gap-4 flex flex-row">
            <button aria-label="Theme Toggle" onClick={() => handleLanguage(currentLang === "pt" ? "en" : "pt")} className={cn("rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}>
                {currentLang == "pt" ? <PT width={24} /> : <US width={24} />}
            </button>

            <button aria-label="Theme Toggle" onClick={ToggleTheme} className={cn("rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}>
                {" "}
                {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300" /> : <Moon className="h-6 w-6 text-blue-900" />}
            </button>
        </div>

    )
}
