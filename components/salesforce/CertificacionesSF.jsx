import React from 'react'
import CarouselComponent from '@/components/Carousel'
import Cert from '@/public/salesforce/1.webp'
import Cert3 from '@/public/salesforce/3.webp'
import Cert4 from '@/public/salesforce/4.webp'
import Cert5 from '@/public/salesforce/5.webp'
import Cert6 from '@/public/salesforce/6.webp'
import Cert7 from '@/public/salesforce/7.webp'
import Cert8 from '@/public/salesforce/8.webp'

const certificacionesSF= [
  { src: Cert, alt: 'SalesForce Data Cloud Consultant' },
  { src: Cert3, alt: 'SalesForce Sales Cloud Consultant' },
  { src: Cert4, alt: 'SalesForce Education Cloud Consultant' },
  { src: Cert5, alt: 'SalesForce Financial Services Cloud' },
  { src: Cert6, alt: 'SalesForce Marketing Cloud Consultant' },
  { src: Cert7, alt: 'SalesForce Service Cloud Consultant' },
  { src: Cert8, alt: 'SalesForce Pardot Specialist' }
];

const CertificacionesSF = ({t}) => {
  return (
        <section className="py-8">
            <h2 className="text-3xl font-bold text-center">{t('certificates.title')}</h2>
            <p className='px-4 my-4 max-w-5xl mx-auto text-center mt-8'>{t('certificates.description')}</p>
            <CarouselComponent images={certificacionesSF} />
        </section>
  )
}

export default CertificacionesSF




