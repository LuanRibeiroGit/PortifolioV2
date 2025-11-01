import { useState } from 'react'
import { useLanguage } from '../../../contexts/LanguageContext'
import { useTheme } from '../../../contexts/ThemeContext'

import sn1 from './imgs/sn1.jpg'
import sn2 from './imgs/sn2.jpg'
import sn3 from './imgs/sn3.jpg'
import sn4 from './imgs/sn4.jpg'
import sn5 from './imgs/sn5.jpg'

const images = [
    sn4,
    sn3,
    sn1,
    sn5
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

