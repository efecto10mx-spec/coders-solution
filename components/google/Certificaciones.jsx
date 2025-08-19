import React from 'react'
import CarouselComponent from '../Carousel'
import GC1 from '@/public/google/GC1.webp';
import GC2 from '@/public/google/GC2.webp';
import GC3 from '@/public/google/GC3.webp';
import GC4 from '@/public/google/GC4.webp';
import GC5 from '@/public/google/GC5.webp';
// import GC6 from '@/public/google/GC6.webp'; se elimina porque es repetida
import GC7 from '@/public/google/GC7.webp';
import GC8 from '@/public/google/GC8.webp';
// import GC9 from '@/public/google/GC9.webp'; se elimina porque es repetida
const GCImages = [
  { src: GC1, alt: 'Google Cloud Certification Cloud Security Engieer' },
  { src: GC2, alt: 'Google Cloud Certification Cloud DevOps Engineer' },
  { src: GC3, alt: 'Google Cloud Certification Cloud Digital Engineer' },
  { src: GC4, alt: 'Google Cloud Certification Cloud Developer' },
  { src: GC5, alt: 'Google Cloud Certification Machine Learning Engineer' },
  { src: GC7, alt: 'Google Cloud Certification Cloud Digital Leader' },
  { src: GC8, alt: 'Google Cloud Certification Cloud Architect' },
];

const Certificaciones = ({t}) => {
  return (
    <div className='px-4 '>
        <h2 className="text-3xl font-bold text-center my-6">{t('googleCloud.certifications.title')}</h2>
        <p className="text-xl text-gray-800 max-w-4xl mx-auto text-center my-12">{t('googleCloud.certifications.description')}</p>
        <CarouselComponent images={GCImages}/>
    </div>
  )
}

export default Certificaciones