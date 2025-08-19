import Certificaciones from '@/components/google/Certificaciones';
import { useTranslation } from '../../i18n';
import Image from 'next/image';
import Logo from '@/public/logoblanco.webp';
import gcpLogo from '@/public/GC-Partner1.webp';
import Industrias from '@/components/google/Industrias';
import Servicios from '@/components/google/Sevicios';
import Beneficios from '@/components/google/Beneficios';
import AgendarDemo from '@/components/AgendarDemo';
import { Server } from 'lucide-react'; 
import AnimatedText from '@/components/AnimatedText';

export const metadata = {
  title: 'What is Google Cloud Platform? | Cloud Solutions for Your Business',
  description: 'Google Cloud Platform (GCP) offers a comprehensive suite of cloud computing services for building, deploying, and managing applications on a secure and scalable infrastructure.',
  keywords: 'Que es Google cloud platform service, Servicios de Google cloud para desarrolladores de aplicaciones, Google Cloud Platform, 3. Google cloud platform desde otro proveedor, cloud migration, cloud security'
};

export default async function WhatIsGoogleCloud({ params: { lng } }) {
  const { t } = await useTranslation(lng, 'google');

  return (
    <div className="mx-auto">
      {/* Sección de Introducción */}
      <section className="bg-azul-navy text-white h-screen px-4 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center h-full md:flex-row xl:justify-evenly">
          <Image 
            src={Logo}
            alt="Coders Solution Logo"
            width={250}
            height={250}
            className="mb-4 lg:mx-4"
          />
          {/* <AnimatedText 
            text={t('googleCloud.title')}
            className='text-3xl xl:text-5xl font-bold mb-4'
          /> */}
          <h1 className="text-3xl xl:text-5xl font-bold mb-4">{t('googleCloud.title')}</h1>
          <Image 
            src={gcpLogo}
            alt="Google Cloud Logo"
            width={250}
            height={250}
            className="mb-4 mt-16 md:mt-0 lg:mx-6"
          />
        </div>
      </section>

      {/* Sección de Descripción */}
      <section className="bg-azul-navy text-gray-300 pb-24 flex flex-col items-center justify-center">
        <Server className="text-white text-8xl mb-6 w-24 h-24" />
        <AnimatedText 
        text={t('googleCloud.description')}
        className="text-2xl md:text-4xl text-center mx-4 max-w-4xl"
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
        }}
      />
        {/* <p className="text-2xl md:text-4xl text-center mx-4 max-w-3xl">
          {t('googleCloud.description')}
        </p> */}
      </section>

      {/* Sección de Servicios */}
      <Servicios t={t} />

      {/* Sección de Beneficios */}
      <Beneficios t={t} />

      {/* Sección de Industrias */}
      <Industrias t={t} />

      {/* Sección de Certificaciones */}
      <Certificaciones t={t} />

      {/* Sección de Agendar Demo */}
      <section id="experts" className="max-w-4xl mx-auto text-center my-12">
      <h4 className='text-center text-azul-navy text-3xl font-bold my-4'>{t('googleCloud.contact.title')}</h4>
        <p className='text-xl'>{t('googleCloud.experts')}</p>
        <AgendarDemo message={t('googleCloud.header-btn')} />
      </section>
    </div>
  );
}

