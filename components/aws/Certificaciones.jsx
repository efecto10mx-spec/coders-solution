import React from 'react'
import CarouselComponent from '../Carousel'
import Cert from '@/public/aws/AWS1.webp'
import Cert2 from '@/public/aws/AWS2.webp'
import Cert3 from '@/public/aws/AWS3.webp'
import Cert4 from '@/public/aws/AWS4.webp'
import Cert5 from '@/public/aws/AWS5.webp'
import Cert6 from '@/public/aws/AWS6.webp'
import Cert7 from '@/public/aws/AWS7.webp'

const AWSImages = [
  { src: Cert, alt: 'AWS Data Analytics Specialty' },
  { src: Cert2, alt: 'AWS Database Specialty' },
  { src: Cert3, alt: 'AWS DevOps Engineer Profesional' },
  { src: Cert4, alt: 'AWS Machine Learning Specialty' },
  { src: Cert5, alt: 'AWS Solutions Architect Associate' },
  { src: Cert6, alt: 'AWS Security Specialty' },
  { src: Cert7, alt: 'AWS Developer Associate' },
];

const Certificaciones = ({t}) => {
  return (
    <section id="experts" className="py-8">
        <p className="text-3xl font-bold text-center">{t('aws.experts')}</p>
        <CarouselComponent images={AWSImages}/>
    </section>
  )
}

export default Certificaciones