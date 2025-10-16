import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'

export function Footer() {
    const { theme } = useTheme()
    const { t } = useLanguage()
    const currentYear = new Date().getFullYear()

    return (
            <footer className={`py-8 px-4 border-t border-border back-${theme} transition-colors duration-300`}>
                <div className="container mx-auto text-center">
                    <p className="">
                        © {currentYear} {t.footer.description}
                    </p>
                </div>
            </footer>
    )
}

