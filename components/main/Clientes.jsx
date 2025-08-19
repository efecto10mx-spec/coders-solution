import React from 'react'
import CarouselComponent from '@/components/Carousel'
import Ganac from '@/public/LogoGanac.webp'
import Regias from '@/public/regias.webp'
import Banco from '@/public/Banco-de-estado-chile-.webp'
import Nestle from '@/public/nestle.webp'
import Albertsons from '@/public/albertsons.webp'
import Innovak from '@/public/innova.webp'
import SimplePin from '@/public/simplepin.webp'
import Pacicif from '@/public/PacificLife.webp'
import AnimatedText from '@/components/AnimatedText'

const images= [
  { src: Ganac, alt: 'Ganac company logo' },
  { src: Regias, alt: 'Regias company logo' },
  { src: Banco, alt: 'BancoEstado company logo' },
  { src: Nestle, alt: 'Nestle company logo' },
  { src: Albertsons, alt: 'Albertsons company logo' },
  { src: Innovak, alt: 'Innovak company logo' },
  { src: SimplePin, alt: 'Simplepin company logo' },
  { src: Pacicif, alt: 'Pacific company logo' }
];

const Clientes = ({ t }) => {
  return (
    <section className='bg-azul-navy  h-screen'>
      <div className=''>
        <AnimatedText 
          text={t('h3')}
          className='text-center text-5xl py-24 text-white'
        />
        {/* <h3 className='text-center text-5xl py-24 text-white'>{t('h3')}</h3> */}
        <CarouselComponent images={images}/>
      </div>
    </section>
  )
}

export default Clientes