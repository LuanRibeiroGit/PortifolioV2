import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'

export function About() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    return (
        <section id='about' className={`py-20 px-4 back-${theme} transition-colors duration-300`}>
            <div className="mx-auto max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                <h2 className="text-4xl font-bold text-center mb-12">{t.about.title}</h2>
                <div className={`bg-card border border-border rounded-lg p-8 shadow-lg container-${theme} transition-colors duration-300`}>
                    <p className="text-lg text-card-foreground leading-relaxed">
                        {t.about.description}
                    </p>
                </div>
                </motion.div>
            </div>
        </section>
    )
}

