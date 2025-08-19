import React from 'react'
import CarouselComponent from './Carousel'
import GC1 from '@/public/860E0425-6FE9-4D4B-8A7A-53F3F05C6C26_L0_001-5_5_2024, 12_19_50 AM.png'
import GC2 from '@/public/922E8844-241C-4429-99BF-7C5E690E3299_L0_001-5_5_2024, 12_19_49 AM.png'
import GC3 from '@/public/93009738-A705-49AC-AAFA-2986BE1A6331_L0_001-5_5_2024, 12_19_49 AM.jpg'
import GC4 from '@/public/D4B850AD-7213-40BC-AB0D-11C3CC0446CD_L0_001-5_5_2024, 12_19_50 AM.png'
import GC5 from '@/public/IMG_0053.png'
import GC6 from '@/public/IMG_0054.png'
import GC7 from '@/public/IMG_0055.png'
import GC8 from '@/public/IMG_0056.png'
import GC9 from '@/public/IMG_0057.png'
import AWS1 from '@/public/AWSDA.png'
import AWS2 from '@/public/AWSDB.png'
import AWS3 from '@/public/AWSDEvops.jpeg'
import AWS4 from '@/public/AWSML.jpeg'
import AWS5 from '@/public/AWSSA.png'
import AWS6 from '@/public/AWSSec.jpeg'
import SF1 from '@/public/IMG_0058.png'
import SF2 from '@/public/IMG_0060.png'
import SF3 from '@/public/IMG_0061.png'
import SF4 from '@/public/IMG_0062.png'
import SF5 from '@/public/IMG_0063.png'
import SF6 from '@/public/IMG_0063.png'
import SF7 from '@/public/IMG_0064.png'

const certificacionesAWS = [
    AWS1,
    AWS2,
    AWS3,
    AWS4,
    AWS5,
    AWS6,
]

const certificacionesGoogle = [
    GC1,
    GC2,
    GC3,
    GC4,
    GC5,
    GC6,
    GC7,
    GC8,
    GC9
]

const certificacionesSF = [
    SF1,
    SF2,
    SF3,
    SF4,
    SF5,
    SF6,
    SF7
]

const Certificaciones = () => {
  return (
    <section className=''>
        
        <div className=''>
            <CarouselComponent images={certificacionesAWS} />
        </div>
        <div className='my-8'>
            <CarouselComponent images={certificacionesGoogle} />
        </div>
        <div className='my-8'>
            <CarouselComponent images={certificacionesSF} />
        </div>
    </section>
  )
}

export default Certificaciones