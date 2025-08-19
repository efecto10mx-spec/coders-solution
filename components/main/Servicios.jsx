import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Sfpartner from '@/public/Salesforce-partner-.webp'
import AWSPartner from '@/public/aws-Partner.webp'
import GoogleCP from '@/public/GC-Partner1.webp'
import AnimatedText from '@/components/AnimatedText'

const Servicios = ({ t, lng }) => {
  return (
    <section className='py-8'>
    <h2 className='text-center text-5xl text-azul-navy'>{t('h2')}</h2>

      {/* DIV de Imagenes */}
      <div className="flex flex-wrap justify-center gap-6 my-12">
        <div className='bg-azul-navy w-72 h-96 flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105'>
          <Link href={`/${lng}/salesforce`}>
          <div className='flex flex-col'>
            <Image 
              src={Sfpartner}
              width={450}
              height={120}
              alt='Salesforce partner logo'
              className='mx-auto -mt-20' 
            />
            <div className='-mt-14'>
              <p className='text-white px-2 text-md text-center font-bold'>{t('sct2p1')}</p>    
              <p className='text-white px-2 text-center'>{t('sct2p2')} <span className='font-bold'>{t('sct2p3')}</span>{t('sct2p4')}</p>
            </div>
          </div>
          </Link>
        </div>

        <div className='bg-azul-navy w-72 h-96 flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105 py-8'>
        <Link href={`/${lng}/aws`}>
        <div className='flex flex-col'>
          <Image 
            src={AWSPartner}
            width={200}
            height={200}
            alt='AWS Partner logo'
            className='mx-auto my-3' 
            />
            <div className='h-1/2'>
              <p className='text-white px-2 text-md text-center font-bold'>{t('sct2p5')}</p>    
              <p className='text-white px-2 text-center'>{t('sct2p6')} <span className='font-bold'>{t('sct2p7')}</span>{t('sct2p8')}</p>  
            </div>
        </div>
        </Link>
        </div>


        <div className='bg-azul-navy w-72 h-96 flex flex-col items-center justify-center hover:cursor-pointer hover:scale-105 pt-8'>
        <Link href={`/${lng}/google-cloud`}>
        <div className='flex flex-col'>
            <Image 
              src={GoogleCP}
              width={240}
              height={240}
              alt='Google Cloud Partner logo'
              className='mx-auto mb-14' 
              />
              <div className='h-1/2'>
                  <p className='text-white px-2 text-md text-center font-bold'>{t('sct2p9')}</p>    
                  <p className='text-white px-2 text-center'>{t('sct2p10')} <span className='font-bold'>{t('sct2p11')}</span>{t('sct2p12')}</p>  
              </div>
        </div>
          </Link>
        </div>
      </div>

      {/* DIV VIDEOS */}
      <div className='flex flex-col lg:flex-row max-w-7xl mx-auto'>
        <div className='p-4 mx-auto'>
          <video
            className="w-full max-w-md rounded-lg shadow-lg"
            controls
          >
            <source src='/AWS.mp4' type="video/mp4" />
            Tu navegador no soporta videos en MP4.
          </video>
        </div>
        <div className='p-4 mx-auto'>
          <video
            className="w-full max-w-md rounded-lg shadow-lg"
            controls
          >
            <source src='/Google.mp4' type="video/mp4" />
            Tu navegador no soporta videos en MP4.
          </video>
        </div>
        <div className='p-4 mx-auto'>
          <video
            className="w-full max-w-md rounded-lg shadow-lg"
            controls
          >
            <source src='/Marketing.mp4' type="video/mp4" />
            Tu navegador no soporta videos en MP4.
          </video>
        </div>
      </div>
    
</section>
  )
}

export default Servicios