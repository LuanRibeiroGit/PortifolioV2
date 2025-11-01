import { useState } from 'react';

import { Easybarbers } from './projects/Easybarbers'
import { Saldonegativo } from './projects/Saldonegativo'
import { Newdawn } from './projects/Newdawn'
import { Boilerplate } from './projects/Boilerplate';

import { useLanguage } from '../../contexts/LanguageContext'
import { useTheme } from '../../contexts/ThemeContext'

import { FiGithub } from "react-icons/fi";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

import { motion } from 'framer-motion'

const projectsData = [
    {
        title: 'Easy barbers',
            description: {
            pt: 'Easy barbers é uma plataforma whitelist para agendamento de barbearias, com um painel central de gestão e personalização individual de domínio e estilo ( CSS ) para cada barbearia.',
            en: 'Easy barbers is a whitelist platform for barbershop scheduling, featuring a central management dashboard and custom domain and style ( CSS ) for each barbershop.'
        },
            tech: ['React', 'TailwindCSS', 'ExpressJS', 'SQLServer'],
            github: 'https://github.com/LuanRibeiroGit/loginFront',
    },
    {
        title: 'Desk Manager RPA',
            description: {
            pt: 'DeskManager RPA é uma automação que detecta chamados como de Saldo Negativo e Pedido Complementar na plataforma ESM DeskManager, resolvendo-os automaticamente.',
            en: 'DeskManager RPA is an automation that detects tickets such as Negative Balance and Complementary Order in the ESM DeskManager platform, resolving them automatically.'
        },
        tech: ['NodeJS', 'ExpressJS', 'SQLServer'],
            github: 'https://github.com/LuanRibeiroGit/DeskManager-RPA',
    },
    {
        title: 'Boilerplate',
            description: {
            pt: 'Boilerplate é uma base pronta para iniciar projetos backend, com configurações, scripts, dependências e estrutura organizacional já definidas para iniciar o desenvolvimento.',
            en: 'Boilerplate is a ready-made foundation for starting backend projects, with pre-defined configurations, scripts, dependencies, and organizational structure to kickstart development.'
        },
        tech: ['TypeScript', 'NestJS', 'MongoDB', 'Swagger'],
            github: 'https://github.com/LuanRibeiroGit/Boilerplate',
    }
    
]

export function Projects() {
    const { t, language } = useLanguage()
    const { theme } = useTheme()
    const [modal, setModal] = useState(false)
    const [indexProjectModal, setIndexProjectModal] = useState()


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
                        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                        <p className="mb-4">
                        {project.description[language]}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, i) => (
                            <span
                            key={i}
                            className={`px-2 py-1 rounded text-xs box-skills-${theme} transition-colors duration-300`}
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                            <a className={`w-full sm:w-auto flex items-center border rounded-[8px] p-2 px-3 text-sm font-medium whitespace-nowrap container-${theme} transition-colors duration-300`} href={project.github} target="_blank" rel="noopener noreferrer">
                                <FiGithub className="h-4 w-4 mr-1" />
                                {t.projects.viewCode}
                            </a>
                            <button onClick={()=>{setModal(true), setIndexProjectModal(index)}} className={`w-full sm:w-auto flex items-center rounded-[8px] p-2 px-3 text-sm font-medium whitespace-nowrap button-view-${theme} transition-colors duration-300`} href={project.demo} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className="h-4 w-4 mr-1" />
                                {t.projects.viewProject}
                            </button>
                        </div>
                    </div>
                    </motion.div>
                ))}
                </div>
                {   
                    modal &&
                        <div onClick={(e) =>{setModal(false), setIndexProjectModal() }} className="fixed inset-0 w-screen bg-black/50 flex items-center justify-center">
                            <div onClick={(e)=>{ e.stopPropagation()}} className={`relative mt-[50px] xl:w-[50%] w-[90%] text-white rounded-[20px] shadow-lg modal-${theme}`}>
                                <button onClick={() =>{setModal(false), setIndexProjectModal()}} className='absolute flex items-center justify-center w-12 h-12 right-0 z-50'>
                                    <IoMdClose size={25} className='z-60'/>
                                </button>
                                <div className='sm:p-10 p-5'>
                                    {  
                                        indexProjectModal == 0 ?
                                            <Easybarbers/>
                                        : indexProjectModal == 1 ?
                                            //<Saldonegativo/>
                                            <Newdawn/>
                                        : indexProjectModal == 2 ?
                                            <Boilerplate/>
                                            : null
                                    }
                                </div>
                            </div>
                        </div>
                }
            </div>
        </section>
    )
}

