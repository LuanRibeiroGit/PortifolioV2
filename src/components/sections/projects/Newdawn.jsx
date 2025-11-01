import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useTheme } from '../../../contexts/ThemeContext'


import nd1 from './imgs/nd1.png'
import nd2 from './imgs/nd2.png'
import nd3 from './imgs/nd3.png'
import newdawn from './imgs/newdawn.mp4'

const media = [
    { type: "video", src: newdawn },
    nd1,
    nd2,
    nd3
]

export function Newdawn() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const [selected, setSelected] = useState(media[0])
    const isVideo = typeof selected !== "string"

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>{t.projects.newdawn.title}</h1>
            <div>
                {isVideo ? (
                <video
                    src={selected.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className='w-full sm:h-[400px] h-[150px] object-cover rounded-xl shadow-lg transition-all duration-300'
                />
                ) : (
                <img
                    src={selected} alt='' className='w-full sm:h-[400px] h-[150px] object-cover rounded-xl shadow-lg transition-all duration-300' />
                )}
            </div>
            <div className='flex justify-between items-end flex-wrap gap-3'>
                <div className='flex gap-2'>
                    {media.map((item, index) => (
                        <button key={index} onClick={() => setSelected(media[index])}
                            className={`rounded-lg overflow-hidden`}
                        >   
                        {   typeof item === "string" ?
                            <img src={item} alt='' className="w-20 h-20 object-cover"/>
                            : <video src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-20 h-20 object-cover" />
                            }
                        </button>
                    ))}
                </div>
                <a href="https://new-dawn-five.vercel.app" alt="" className={`w-full py-2 sm:w-auto flex items-center text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-300`} target="_blank" rel="noopener noreferrer">
                    {t.projects.newdawn.project}
                </a>
            </div>
            <p className='text-center leading-relaxed'>{t.projects.newdawn.description}</p>
        </div>
    )
}

