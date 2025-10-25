import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useTheme } from '../../../contexts/ThemeContext'

import dash1 from './imgs/dash1.png'
import dash2 from './imgs/dash2.png'
import dash3 from './imgs/dash3.png'
import easybarbers from './imgs/easybarbers.mp4'

const media = [
    { type: "video", src: easybarbers },
    dash1,
    dash2,
    dash3,
]

export function Easybarbers() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const [selected, setSelected] = useState(media[0])
    const isVideo = typeof selected !== "string"

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>{t.projects.easybarbers.title}</h1>
            <div>
                {isVideo ? (
                <video
                    src={selected.src}
                    autoPlay
                    loop
                    muted
                    controls
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
                                className="w-20 h-20 object-cover" />
                            }
                        </button>
                    ))}
                </div>
                <a href="https://easybarbers.vercel.app" alt="" className={`w-full py-2 sm:w-auto flex items-center text-sm font-medium whitespace-nowrap text-blue-500 hover:text-blue-300`} target="_blank" rel="noopener noreferrer">
                    ver projeto
                </a>
            </div>
            <p className='text-center leading-relaxed'>{t.projects.easybarbers.description}</p>
        </div>
    )
}

