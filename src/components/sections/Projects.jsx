import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from 'framer-motion'

const projectsData = [
    {
        title: 'E-commerce Platform',
        description: {
        pt: 'Plataforma completa de e-commerce com carrinho de compras, pagamentos e painel administrativo.',
        en: 'Complete e-commerce platform with shopping cart, payments, and admin dashboard.'
        },
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Task Management App',
        description: {
        pt: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e notificações.',
        en: 'Task management app with real-time collaboration and notifications.'
        },
        tech: ['Next.js', 'NestJS', 'Prisma', 'WebSocket'],
        github: '#',
        demo: '#'
    },
    {
        title: 'Weather Dashboard',
        description: {
        pt: 'Dashboard de previsão do tempo com gráficos interativos e geolocalização.',
        en: 'Weather forecast dashboard with interactive charts and geolocation.'
        },
        tech: ['React', 'TypeScript', 'Tailwind', 'API'],
        github: '#',
        demo: '#'
    }
]

export function Projects() {
    const { t, language } = useLanguage()
    const { theme } = useTheme()

    return (
        <section id="projects" className={`py-20 px-4 back-${theme} transition-colors duration-300`}>
        <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold text-center mb-12">{t.projects.title}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`bg-card border border-border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-colors duration-300 container-${theme}`}
                >
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-card-foreground">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                    {project.description[language]}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                        <span
                        key={i}
                        className={`px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs box-skills-${theme} transition-colors duration-300`}
                        >
                        {tech}
                        </span>
                    ))}
                    </div>
                    <div className="flex flex-wrap gap-2">
                        <button className={`w-full sm:w-auto flex items-center border rounded-[8px] p-2 px-3 text-sm font-medium whitespace-nowrap container-${theme} transition-colors duration-300`} href={project.github} target="_blank" rel="noopener noreferrer">
                            <FiGithub className="h-4 w-4 mr-1" />
                            {t.projects.viewCode}
                        </button>
                        <button className={`w-full sm:w-auto flex items-center rounded-[8px] p-2 px-3 text-sm font-medium whitespace-nowrap button-view-${theme} transition-colors duration-300`} href={project.demo} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                            {t.projects.viewProject}
                        </button>
                    </div>
                </div>
                </motion.div>
            ))}
            </div>
        </div>
        </section>
    )
}

