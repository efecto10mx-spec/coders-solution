import React from 'react';
import { Car, Phone, Box, School, Star, Factory, Heart, Tv, Handshake, Building } from 'lucide-react';

const iconMap = {
  automotive: <Car className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  telecom: <Phone className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  consumerGoods: <Box className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  education: <School className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  energy: <Star className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  financialServices: <Building className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  healthcare: <Heart className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  manufacturing: <Factory className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  media: <Tv className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  nonProfit: <Handshake className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  publicSector: <Building className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />
};

const Industrias = ({ t }) => {
  return (
    <section className="py-8 bg-azul-navy text-white">
      <h2 className="text-3xl font-bold text-center mb-6">{t('industries.title')}</h2>
      <ul className="grid gap-4 mx-4 md:mx-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.keys(iconMap).map((key) => (
          <li key={key} className="flex flex-col items-center bg-white text-azul-navy p-4 rounded-lg shadow-md">
            {iconMap[key]}
            <span className="mt-2 text-center">{t(`industries.${key}`)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Industrias;



