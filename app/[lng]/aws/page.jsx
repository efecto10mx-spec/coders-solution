import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../i18n';
import Industrias from '@/components/aws/Industrias';
import Servicios from '@/components/aws/Servicios';
import awsLogo from '@/public/aws-Partner.webp';
import Beneficios from '@/components/aws/Beneficios';
import Logo from '@/public/logoblanco.webp';
import Certificaciones from '@/components/aws/Certificaciones';
import AgendarDemo from '@/components/AgendarDemo';
import { ShieldCheck } from 'lucide-react';
import AnimatedText from '@/components/AnimatedText';

export const metadata = {
  title: '¿Qué es Amazon Web Services (AWS)? | Soluciones de Nube para Escalar y Optimizar tu Negocio',
  description: 'Amazon Web Services (AWS) es la plataforma líder de servicios en la nube que proporciona almacenamiento, seguridad y soluciones de migración. Descubre cómo AWS puede ayudarte a escalar, optimizar y asegurar tus operaciones tecnológicas con una amplia gama de servicios diseñados para impulsar tu negocio.',
  keywords: '¿Qué es Amazon Web Services y qué proporciona?, Cómo implementar AWS en mi negocio, Servicios de almacenamiento en la nube, Migración de datos en la nube, Seguridad en la nube'
}

export default async function WhatIsAWS({ params: { lng } }) {
  const { t } = await useTranslation(lng, "aws");

  return (
    <div className="mx-auto py-8">
      {/* Sección de Introducción */}
      <section className="bg-azul-navy text-white h-screen px-4  justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center h-full md:flex-row xl:justify-evenly">
          <Image 
            src={Logo}
            alt="Coders Solution Logo"
            width={250}
            height={250}
            className="mb-4"
          />
          {/* <AnimatedText 
            text={t('aws.title')}
            className='text-3xl xl:text-5xl font-bold mb-4'
          /> */}
          <h1 className="text-3xl xl:text-5xl font-bold mb-4">{t('aws.title')}</h1>
          <Image 
            src={awsLogo}
            alt="AWS Logo"
            width={250}
            height={250}
            className="my-6"
          />
        </div>
      </section>
      
      {/* Sección de Descripción */}
      <section className="bg-azul-navy text-gray-300 py-20 flex flex-col items-center justify-center ">
        <ShieldCheck className="text-white text-8xl mb-14 w-24 h-24" />
        <AnimatedText 
        text={t('aws.description')}
        className="text-lg md:text-3xl text-center mx-4 max-w-5xl"
        customVariants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          },
        }}
      />
        {/* <p className="text-lg md:text-3xl text-center mx-4">
          {t('aws.description')}
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
      <section className='max-w-4xl mx-auto text-center my-8'>
        <h4 className='text-center text-azul-navy text-3xl font-bold my-4'>{t('aws.contact.title')}</h4>
        <p className=' text-lg lg:text-xl'>{t('aws.contact.description')} </p>
        <AgendarDemo message={t('aws.header-btn')} />
      </section>
    </div>
  );
}



