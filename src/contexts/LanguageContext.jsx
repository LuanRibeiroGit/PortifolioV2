import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
    pt: {
        nav: {
        about: 'Sobre',
        skills: 'Habilidades',
        projects: 'Projetos',
        contact: 'Contato'
        },
        hero: {
        greeting: 'Olá, eu sou',
        role: 'Desenvolvedor Fullstack',
        description: 'Apaixonado por criar soluções inovadoras e experiências digitais incríveis.',
        cta: 'Ver Projetos'
        },
        about: {
        title: 'Sobre Mim',
        description: 'Sou um desenvolvedor fullstack com experiência em criar aplicações web modernas e escaláveis. Minha paixão é transformar ideias em realidade através do código, sempre buscando as melhores práticas e tecnologias mais recentes.'
        },
        skills: {
        title: 'Habilidades',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Ferramentas'
        },
        projects: {
        title: 'Projetos',
        viewProject: 'Ver Projeto',
        viewCode: 'Ver Código'
        },
        contact: {
        title: 'Contato',
        description: 'Vamos trabalhar juntos! Entre em contato comigo.',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
        }
    },
    en: {
        nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
        },
        hero: {
        greeting: 'Hi, I\'m',
        role: 'Fullstack Developer',
        description: 'Passionate about creating innovative solutions and amazing digital experiences.',
        cta: 'View Projects'
        },
        about: {
        title: 'About Me',
        description: 'I\'m a fullstack developer with experience in building modern and scalable web applications. My passion is to transform ideas into reality through code, always seeking best practices and the latest technologies.'
        },
        skills: {
        title: 'Skills',
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools'
        },
        projects: {
        title: 'Projects',
        viewProject: 'View Project',
        viewCode: 'View Code'
        },
        contact: {
        title: 'Contact',
        description: 'Let\'s work together! Get in touch with me.',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn'
        }
    }
    }

    export function LanguageProvider({ children }) {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language')
        return savedLanguage || 'pt'
    })

    const toggleLanguage = () => {
        const newLanguage = language === 'pt' ? 'en' : 'pt'
        setLanguage(newLanguage)
        localStorage.setItem('language', newLanguage)
    }

    const t = translations[language]

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
        {children}
        </LanguageContext.Provider>
    )
    }

    export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider')
    }
    return context
}

