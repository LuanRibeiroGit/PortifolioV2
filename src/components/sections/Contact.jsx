import { useTheme } from '../../contexts/ThemeContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { motion } from 'framer-motion'

export function Contact() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const contactLinks = [
        {
            icon: CiMail,
            label: t.contact.email,
            href: 'mailto:luansoftwareengineer@gmail.com',
            color: 'text-red-500'
        },
        {
            icon: FiGithub,
            label: t.contact.github,
            href: 'https://github.com/LuanRibeiroGit',
        },
        {
            icon: FiLinkedin,
            label: t.contact.linkedin,
            href: 'https://www.linkedin.com/in/luan-ribeiro-63b60a234',
            color: 'text-blue-500'
        }
    ]

    return (
        <section id="contact" className={`py-20 px-4 container-skills-${theme} transition-colors duration-300`}>
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                <h2 className="text-4xl font-bold mb-6">{t.contact.title}</h2>
                <p className="text-lg text-muted-foreground mb-12">
                    {t.contact.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {contactLinks.map((link, index) => (
                    <button key={index} className="w-full sm:w-auto" >
                        <a
                            className={`w-full sm:w-auto whitespace-nowrap flex items-center justify-center border rounded-[8px] p-2 px-3 text-sm font-medium container-${theme} transition-colors duration-300`}
                            href={link.href} target="_blank" rel="noopener noreferrer">
                            <link.icon className={`h-5 w-5 mr-2 ${link.color}`} />
                            {link.label}
                        </a>
                    </button>
                    ))}
                </div>
                </motion.div>
            </div>
        </section>
    )
}

