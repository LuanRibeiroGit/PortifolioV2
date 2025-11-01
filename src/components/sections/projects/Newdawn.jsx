import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useTheme } from '../../../contexts/ThemeContext'


import nd1 from './imgs/nd1.jpg'
import nd2 from './imgs/nd2.jpg'
import nd3 from './imgs/nd3.jpg'

const images = [
    nd1,
    nd2,
    nd3
]

export function Newdawn() {
    const { t } = useLanguage()
    const { theme } = useTheme()

    const [selected, setSelected] = useState(images[0])

    return (
        <div className='flex flex-col gap-5'>
            <h1 className='text-4xl font-bold'>{t.projects.newdawn.title}</h1>
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
            <p className='text-center leading-relaxed'>{t.projects.newdawn.description}</p>
        </div>
    )
}

