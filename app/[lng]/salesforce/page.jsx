import React from 'react';
import Image from 'next/image';
import { useTranslation } from '../../i18n';
import logo from '@/public/logoblanco.webp';
import SF from '@/public/Salesforce-partner-.webp';
import Soluciones from '@/components/salesforce/Soluciones';
import Industrias from '@/components/salesforce/Industrias';
import CertificacionesSF from '@/components/salesforce/CertificacionesSF';
import Servicios from '@/components/salesforce/Servicios';
import AgendarDemo from '@/components/AgendarDemo';
import { Users } from 'lucide-react'; 
import AnimatedText from '@/components/AnimatedText';

export const metadata = {
  title: '¿Qué es Salesforce? | Soluciones CRM Personalizadas para tu Empresa',
  description: 'Salesforce es el CRM en la nube líder para optimizar ventas, marketing y servicio al cliente. Ofrecemos soluciones personalizadas y soporte continuo para impulsar tu negocio.',
  keywords: 'Que es salesforce, CRM mas utilizado a nivel global, Ventajas de usar Salesforce, Funcionalidades de salsforce para marketing, Optimización de Salesforce, Integración y soporte Salesforce'
}

export default async function WhatIsSalesforce({ params: { lng } }) {
  const { t } = await useTranslation(lng, "salesforce");
  
  return (
    <div className='pt-10'>
      {/* Sección de Introducción */}
      <section className="bg-azul-navy text-white h-screen px-4 flex flex-col justify-center items-center">
        <div className="flex flex-col items-center justify-center text-center h-full md:flex-row xl:justify-evenly">
          <Image 
            src={logo}
            alt="Logo Coders Solution"
            width={250}
            height={250}
            className="mb-4 lg:mx-4"
          />
          {/* <AnimatedText 
            text={t('whatIsSalesforce.title')}
            className='text-3xl xl:text-5xl font-bold mb-4'
          /> */}
          <h1 className="text-3xl xl:text-5xl font-bold lg:mx-12">{t('whatIsSalesforce.title')}</h1>
          <Image 
            src={SF}
            alt="Salesforce Logo"
            width={450}
            height={450}
            className="-m-12"
          />
        </div>
      </section>

      {/* Sección de Descripción */}
      <section className="bg-azul-navy text-gray-300 py-24 flex flex-col items-center justify-center">
        <Users className="text-white text-8xl mb-6 w-24 h-24" />
        <AnimatedText text={t('whatIsSalesforce.description')} className="text-lg md:text-3xl text-center mx-4 max-w-4xl" />
        {/* <p className="text-lg md:text-3xl text-center mx-4 max-w-3xl">
          {t('whatIsSalesforce.description')}
        </p> */}
      </section>

      {/* Sección combinada */}
      <Servicios t={t} />

      {/* Sección de Soluciones Salesforce */}
      <Soluciones t={t} />

      {/* Sección de Industrias */}
      <Industrias t={t} />

      {/* Certificaciones */}
      <CertificacionesSF t={t} />

      {/* Sección de Contacto */}
      <section className="max-w-4xl mx-auto text-center mt-6 mb-24">
        <h2 className="text-3xl font-bold text-azul-navy text-center">{t('contact.title')}</h2>
        <p className="mt-4 text-xl">{t('contact.description')}</p>
        <AgendarDemo message={t('header-btn')} />
      </section>
    </div>
  );
}


