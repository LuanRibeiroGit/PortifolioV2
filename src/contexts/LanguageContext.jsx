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
            viewCode: 'Ver Código',
            easybarbers: {
                title: 'Easy Barbers',
                description: 'Easy Barbers é uma plataforma whitelist voltada para o agendamento de barbearias. Ela oferece um painel administrativo centralizado, que permite o gerenciamento unificado de todas as barbearias cadastradas. Cada barbearia, por sua vez, conta com seu próprio domínio personalizado e estilo visual exclusivo (CSS customizado), garantindo identidade e autonomia dentro do ecossistema da plataforma.',
                project: 'Ver Projeto'
            },
            // saldonegativo: {
            //     title: 'DeskManager RPA',
            //     description: 'DeskManager RPA é uma automação desenvolvida para identificar chamados de Saldo Negativo e Pedido Complementar na plataforma ESM DeskManager, permitindo a resolução automática dos chamados, agilizando processos internos e reduzindo a necessidade de intervenção manual.'
            // },
            newdawn: {
                title: 'New Dawn',
                description: 'A New Dawn é uma empresa especializada na criação de landing pages e portfólios profissionais, unindo design moderno, desempenho e experiência do usuário. Nosso objetivo é ajudar marcas e profissionais a construírem uma presença digital forte e atraente, transformando ideias em experiências visuais que geram conexão e credibilidade.',
                project: 'Ver Projeto'
            },
            boilerplate: {
                title: 'Boilerplate',
                description: 'Boilerplate é um projeto inicial estruturado que fornece uma base pronta para o desenvolvimento de aplicações, incluindo configuração de ferramentas, organização de pastas, scripts e dependências essenciais. Ele permite que desenvolvedores comecem novos projetos de forma rápida e consistente, seguindo boas práticas de código e padrões organizacionais.'
            }
        },
        contact: {
            title: 'Contato',
            description: 'O único limite entre você e seus sonhos é a ação que você ainda não tomou.',
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn'
        },
        footer: {
            description: 'Portfólio. Feito com ❤️ por Luan Ribeiro :)'
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
            viewCode: 'View Code',
            easybarbers: {
                title: 'Easy Barbers',
                description: 'Easy Barbers is a whitelist platform focused on barbershop scheduling. It provides a centralized administrative dashboard that enables unified management of all registered barbershops. Each barbershop has its own custom domain and unique visual style (custom CSS), ensuring individuality and autonomy within the platform’s ecosystem.',
                project: 'View Project'
            },
            // saldonegativo: {
            //     title: 'DeskManager RPA',
            //     description: 'DeskManager RPA is an automation designed to identify tickets related to Negative Balance and Complementary Order in the ESM DeskManager platform, enabling automatic ticket resolution, streamlining internal processes and reducing the need for manual intervention.'
            // },
            newdawn: {
                title: 'New Dawn',
                description: 'New Dawn is a company specialized in creating landing pages and professional portfolios, combining modern design, performance, and user experience. Our goal is to help brands and professionals build a strong and attractive digital presence, turning ideas into visual experiences that create connection and credibility.',
                project: 'View Project'
            },
            boilerplate: {
                title: 'Boilerplate',
                description: 'Boilerplate is a structured starter project that provides a ready-made foundation for application development, including tool configuration, folder organization, scripts, and essential dependencies. It enables developers to start new projects quickly and consistently, following coding best practices and organizational standards.'
            }
        },
        contact: {
            title: 'Contact',
            description: 'The only limit between you and your dreams is the action you haven’t taken yet.',
            email: 'Email',
            github: 'GitHub',
            linkedin: 'LinkedIn'
        },
        footer: {
            description: 'Portfolio. Made with ❤️ by Luan Ribeiro :)'
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

