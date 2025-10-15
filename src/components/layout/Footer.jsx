import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

export function Footer() {
    const { theme } = useTheme()
    const currentYear = new Date().getFullYear()

    return (
            <footer className={`py-8 px-4 border-t border-border back-${theme}`}>
                <div className="container mx-auto text-center">
                    <p className="">
                        © {currentYear} Portfolio. Made with ❤️ using React, Vite & Tailwind CSS.
                    </p>
                </div>
            </footer>
    )
}

