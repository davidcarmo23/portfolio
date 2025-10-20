import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { PT, US } from 'country-flag-icons/react/3x2'

export const LanguageToggle = () => {
    const [currentLang, setCurrentLang] = useState("en");

    useEffect(() => {
        setCurrentLang(localStorage.getItem("userLang"));
    }, [])

    const handleLanguage = (lang) => {
        localStorage.setItem("userLang", lang);
        location.reload();
    }

    return (
        <div className="fixed top-6 right-11 z-50 p-2 justify-between w-auto gap-4 flex flex-row">
            <button aria-label="Theme Toggle" onClick={() => handleLanguage(currentLang === "pt" ? "en" : "pt")} className={cn("rounded-full transition-colors duration-300",
                "focus:outline-hidden",
            )}>
                {currentLang == "pt" ? <PT width={24} /> : <US width={24} />}
            </button>
        </div>

    )
}
