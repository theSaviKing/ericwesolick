import { useEffect, useState } from "react";
import { MoonStar, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

type Scheme = "light" | "dark" | null;

export default function SchemeSwitch() {
    const [scheme, setScheme] = useState<Scheme>(null);

    useEffect(() => {
        const currentScheme = localStorage.getItem("scheme");
        if (currentScheme) {
            setScheme(currentScheme as Scheme);
        } else {
            const prefersDarkScheme = window.matchMedia(
                "(prefers-color-scheme: dark)",
            ).matches;
            setScheme(prefersDarkScheme ? "dark" : "light");
        }
    }, []);

    const toggleScheme = () => {
        localStorage.setItem("scheme", scheme === "light" ? "dark" : "light");
        setScheme((prevScheme) => (prevScheme === "light" ? "dark" : "light"));
        document.documentElement.classList.toggle("dark");
    };

    return (
        <Button
            className="relative"
            variant="outline"
            size="icon"
            onClick={toggleScheme}
        >
            <MoonStar
                absoluteStrokeWidth
                className={`absolute transition-all ${scheme === "dark" ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
            />
            <Sun
                absoluteStrokeWidth
                className={`absolute transition-all ${scheme === "light" ? "rotate-0 opacity-100" : "rotate-45 opacity-0"}`}
            />
        </Button>
    );
}
