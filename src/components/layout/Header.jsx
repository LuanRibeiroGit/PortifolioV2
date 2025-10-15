import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";


import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

export function Header() {
    const { theme, toggleTheme } = useTheme()
    const { language, toggleLanguage, t } = useLanguage()


    return (
        <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-sm border-b back-${theme}`}>
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <a href="#" className="text-2xl font-bold transition-colors">
                Portfolio
                </a>
                <div className="hidden md:flex items-center gap-8">
                <a href="#about" className={`transition-colors text-${theme}`}>
                    {t.nav.about}
                </a>
                <a href="#skills" className={`transition-colors text-${theme}`}>
                    {t.nav.skills}
                </a>
                <a href="#projects" className={`transition-colors text-${theme}`}>
                    {t.nav.projects}
                </a>
                <a href="#contact" className={`transition-colors text-${theme}`}>
                    {t.nav.contact}
                </a>
                </div>

                <div className="flex items-center gap-2">
                <button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className={`rounded-full flex items-center justify-center w-10 h-10 button-${theme}`}
                >
                    {theme === 'light' ? <IoMoonOutline className="h-5 w-5" /> : <MdOutlineWbSunny className="h-5 w-5" />}
                </button>
                <button
                    variant="ghost"
                    size="icon"
                    onClick={toggleLanguage}
                    className={`rounded-full flex items-center justify-center w-10 h-10 button-${theme}`}
                >
                    <CiGlobe className="h-5 w-5" />
                    <span className="ml-1 text-xs font-semibold">{language.toUpperCase()}</span>
                </button>
                </div>
            </nav>
        </header>
    )
}

