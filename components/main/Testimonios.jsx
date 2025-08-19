import React from 'react'
import Image from 'next/image'
import Ganac from '@/public/LogoGanac.webp'
import Regias from '@/public/regias.webp'
import AnimatedText from '@/components/AnimatedText'

const Testimonios = ({ t }) => {
  return (
    <section>
        <AnimatedText 
          text={t('h4')}
          className='text-center text-5xl text-azul-navy my-8'
        />
      <div className='flex flex-col lg:flex-row justify-evenly'>
        
        {/* GANAC CLIENTE */}
        <div className="bg-white rounded-lg shadow-lg py-6 px-2 flex flex-col my-6 mx-auto lg:w-4/12">
          <div className='flex justify-center'>
            <Image
              src={Ganac}
              alt='Ganac logo'
              width={90}
              height={60}
              className='my-4'
            />
          </div>
          <div className=" mx-auto">
            {/* Video con estilos ajustados */}
            <video controls className="w-full md:w-3/4 lg:w-full mx-auto max-w-sm h-3/4 mt-4 md:h-5/6 rounded-lg shadow-lg object-fill">
              <source src='/ganac.mp4' type="video/mp4" />
              {t('video')}
            </video>
          </div>
        </div>
        
        {/* REGIA CLIENTE */}
        <div className="bg-white rounded-lg shadow-lg py-6 px-2 flex flex-col my-6 mx-auto lg:w-4/12">
          <div className='flex justify-center'>
            <Image
              src={Regias}
              alt='Regias logo'
              width={80}
              height={80}
            />
          </div>
          <div className=" mx-auto">
            {/* Video con estilos ajustados */}
            <video controls className="w-full md:w-3/4 lg:w-full mx-auto max-w-sm h-3/4 mt-4 md:h-5/6 rounded-lg shadow-lg object-fill">
              <source src='/regias2.mp4' type="video/mp4" />
              {t('video')}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
