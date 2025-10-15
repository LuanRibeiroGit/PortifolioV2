import { motion } from 'framer-motion'

import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'

export function Hero() {
    const { theme } = useTheme()
    const { t } = useLanguage()

    return (
        <section className={`min-h-screen back-${theme} flex items-center justify-center px-4 pt-20 transition-colors duration-300`}>
        <div className="container mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
            <p className="text-lg mb-2 text-[#969696]">{t.hero.greeting}</p>
            <h1 className={`text-5xl md:text-7xl text-title-${theme} font-bold mb-4 bg-clip-text text-transparent`}>
                Luan Ribeiro
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">{t.hero.role}</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 text-[#969696]">
                {t.hero.description}
            </p>
            <button className={`items-center justify-center gap-2 whitespace-nowrap text-sm font-medium px-6 py-[10px] rounded-lg button-view-${theme} transition duration-300`}>
                <a href="#projects">{t.hero.cta}</a>
            </button>
            </motion.div>
        </div>
        </section>
    )
}

