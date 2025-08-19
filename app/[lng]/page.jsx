import Image from 'next/image'
import { useTranslation } from '../i18n'
import Logo from '@/public/logoblanco.webp';
import Servicios from '@/components/main/Servicios'
import Clientes from '@/components/main/Clientes'
import Testimonios from '@/components/main/Testimonios';
import AgendarDemo from '@/components/AgendarDemo';
import AnimatedText from '@/components/AnimatedText';


export const metadata = {
  title: 'Coders Solution Salesforce|AWS|GCP Partners',
  description: 'Impulsamos la transformación digital en EE.UU., México y LATAM con soluciones en Salesforce, AWS y Google Cloud. Ayudamos a las empresas a crecer con tecnología a medida. Agenda una reunión para conocer cómo podemos hacer crecer tu negocio.',
  keywords: 'Implementacion de Salesforce CRM, Migración de datos a la nube, Soluciones en Google cloud plataform service, Gestión de clientes'
}


export default async function Page({ params: { lng } }) {
  
  const { t } = await useTranslation(lng)

  return (
    <div className='' >
      <main className=' min-h-screen '>
        <header className='flex flex-col justify-between items-center pt-12 md:pt-24 px-4 bg-azul-navy text-white min-h-screen'>
          <div className='py-12'>
            <Image
              src={Logo}
              alt='Amazon Web Services Partner logo'
              className='mx-auto py-2'
              height={250}
              priority
            />
          {/* <AnimatedText 
            text={t('title')}
            className='text-5xl font-semibold text-center mb-4'
          /> */}
            <h1 className='text-5xl font-semibold text-center mb-4'>{t('title')}</h1>
            <AgendarDemo message={t('header-btn')} />
          </div>
        {/* Section 1 Banner */}
        </header>
        <section className="bg-azul-navy text-white py-12">
          <div className="max-w-7xl mx-auto px-4">
            
            {/* Tres cuadros estilizados */}
            <div className="flex flex-col md:flex-row justify-between">
              
              {/* Cuadro 1 */}
              <div className="border border-gray-400 p-6 text-center shadow-lg flex-1 w-full lg:w-1/3 min-h-80 md:w-80">
                <p className='text-7xl font-extrabold text-azul-cielo'>7+</p>
                <p className="text-3xl text-gray-100 mt-16 italic"> {t('sct1p1')}</p>
              </div>
              
              {/* Cuadro 2 */}
              <div className="border border-gray-400 p-6 text-center shadow-lg flex-1 w-full lg:w-1/3 min-h-80 md:w-80">
                <p className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-azul-cielo mt-4">100+ {t('sct1p2')}</p>
                <p className="text-3xl text-gray-100 mt-16 italic">{t('sct1p3')}</p>
              </div>
              
              {/* Cuadro 3 */}
                { lng === 'es' ? (
                  <div className="border border-gray-400 p-6 text-center shadow-lg flex-1 w-full lg:w-1/3 min-h-80 md:w-80">
                    <p className="text-3xl text-gray-100 mt-16 italic mb-6 ">{t('sct1p4.1')}</p>
                    <p className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-azul-cielo">{t('sct1p4')}</p>
                  </div>
                ): "" }

                { lng === 'en' ? (
                      <div className="border border-gray-400 p-6 text-center shadow-lg flex-1 w-full lg:w-1/3 min-h-80 md:w-80">
                          <p className="text-3xl text-gray-100 mt-16 italic mb-6">{t('sct1p5')}</p>
                          <p className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-azul-cielo">{t('sct1p5.1')}</p>
                      </div>
                ): "" }
                
              </div>
            
            {/* Texto fuera de los cuadros */}
            <div className="mt-8 text-center">
            <AnimatedText text={t('sct1p6')} className="text-2xl py-16 lg:py-20" />
              {/* <p className="text-2xl py-16 lg:py-20">{t('sct1p6')}</p> */}
            </div>
            
          </div>
          </section>



        {/* Section 2 Servicios */}
        <Servicios t={t} lng={lng} />
        {/* Section 3 Clientes */}
        <Clientes t={t}/>
        {/* Section 4 Testimonios */}
        <Testimonios t={t} />
        <section className='max-w-4xl mx-auto text-center'>
        <h2 className="text-3xl font-bold text-azul-navy text-center">{t('contacttitle')}</h2>
        <p className="mt-4 text-xl">{t('contactp1')}</p>
          <AgendarDemo message={t('header-btn')} />
        </section>
      </main>
    </div>
  )
}


