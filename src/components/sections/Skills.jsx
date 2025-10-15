import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'
import { motion } from 'framer-motion'

const skillsData = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS'],
    backend: ['Node.js', 'NestJS', 'Prisma', 'SQL Server', 'REST APIs'],
    tools: ['Docker', 'Git', 'VS Code', 'Postman', 'Linux']
}

export function Skills() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const SkillCard = ({ title, skills }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`bg-card border container-${theme} rounded-lg p-6 shadow-lg`}
        >
        <h3 className="text-xl font-semibold mb-4">{title}</h3>
        <div className={`flex flex-wrap gap-2`}>
            {skills.map((skill, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium box-skills-${theme}`} >
                {skill}
            </span>
            ))}
        </div>
        </motion.div>
    )

    return (
        <section id="skills" className={`py-20 px-4 container-skills-${theme} transition-colors duration-300`}>
            <div className={`container mx-auto max-w-6xl`}>
                <h2 className="text-4xl font-bold text-center mb-12">{t.skills.title}</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <SkillCard title={t.skills.frontend} skills={skillsData.frontend} />
                    <SkillCard title={t.skills.backend} skills={skillsData.backend} />
                    <SkillCard title={t.skills.tools} skills={skillsData.tools} />
                </div>
            </div>
        </section>
    )
}

