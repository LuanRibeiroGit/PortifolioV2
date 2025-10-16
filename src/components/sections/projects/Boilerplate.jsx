import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useTheme } from '../../../contexts/ThemeContext'

import bl1 from './imgs/bl1.png'
import bl2 from './imgs/bl2.png'
import bl3 from './imgs/bl3.png'
import bl4 from './imgs/bl4.png'

const images = [
    bl1,
    bl2,
    bl3,
    bl4
]

export function Boilerplate() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const [selected, setSelected] = useState(images[0])

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>{t.projects.boilerplate.title}</h1>
            <div>
                <img src={selected} alt="" className='w-full sm:h-[400px] h-[150px] object-cover rounded-xl shadow-lg transition-all duration-300'/>
            </div>
            <div className='flex gap-2'>
                {images.map((img, index) => (
                    <button key={index} onClick={() => setSelected(images[index])}
                        className={`rounded-lg overflow-hidden`}
                    >
                        <img src={img} alt='' className="w-20 h-20 object-cover"
                        />
                    </button>
                ))}
            </div>
            <p className='text-center leading-relaxed'>{t.projects.boilerplate.description}</p>
        </div>
    )
}

