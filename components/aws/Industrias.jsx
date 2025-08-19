import React from 'react';
import { Code, Briefcase, Activity, ShoppingBag, Mic, School, Factory, Scale, Headset, Atom } from 'lucide-react';

const iconMap = {
  technologySoftware: <Code className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  finance: <Briefcase className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  healthcare: <Activity className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  retailEcommerce: <ShoppingBag className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  mediaEntertainment: <Mic className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  education: <School className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  manufacturing: <Factory className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  government: <Scale className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  telecommunications: <Headset className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  energyResources: <Atom className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />,
  automotive: <Atom className="w-8 h-8 md:w-12 md:h-12 text-azul-cielo" />
};

const Industrias = ({ t }) => {
  return (
    <section className="py-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-6 text-azul-navy">{t('aws.industries.title')}</h2>
      <ul className="grid gap-4 mx-4 md:mx-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
        {Object.keys(iconMap).map((key) => (
          <li key={key} className="flex flex-col items-center bg-azul-navy text-white p-4 rounded-lg shadow-md">
            {iconMap[key]}
            <span className="mt-2 text-center">{t(`aws.industries.${key}`)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Industrias;
