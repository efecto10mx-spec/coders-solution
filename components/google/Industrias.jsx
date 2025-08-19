import React from 'react';
import { School, Briefcase, Factory, Activity, HeartPulse, Hotel, Scale, Gamepad, ShoppingCart } from 'lucide-react';

const iconMap = {
  education: <School className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  finance: <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  manufacturing: <Factory className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  healthcare: <HeartPulse className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,  // Cambiado a ícono de salud
  sports: <Activity className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,  // Deporte
  hospitality: <Hotel className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,  // Hotelería y turismo
  publicSector: <Scale className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,  // Sector público
  gaming: <Gamepad className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,  // Videojuegos
  ecommerce: <ShoppingCart className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />  // E-commerce
};

const Industrias = ({ t }) => {
  return (
    <section id="industries" className="py-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-azul-navy">{t('googleCloud.industries.title')}</h2>
      <ul className="grid gap-4 mx-4 md:mx-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Object.keys(iconMap).map((key) => (
          <li key={key} className="flex flex-col items-center bg-azul-navy text-white p-4 rounded-lg shadow-md">
            {iconMap[key]}
            <span className="mt-2 text-center">{t(`googleCloud.industries.${key}`)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Industrias;


