import React from 'react';
import { TrendingUp, DollarSign, Zap, Shield, Code, ChartColumn} from 'lucide-react';

const Beneficios = ({ t }) => {
  const benefits = [
    {
      icon: <TrendingUp className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.scalability.title'),
      description: t('googleCloud.benefits.scalability.description')
    },
    {
      icon: <DollarSign className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.costEfficiency.title'),
      description: t('googleCloud.benefits.costEfficiency.description')
    },
    {
      icon: <Zap className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.performance.title'),
      description: t('googleCloud.benefits.performance.description')
    },
    {
      icon: <Shield className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.security.title'),
      description: t('googleCloud.benefits.security.description')
    },
    {
      icon: <Code className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.innovation.title'),
      description: t('googleCloud.benefits.innovation.description')
    },
    {
      icon: <ChartColumn className="text-azul-navy mb-4 mx-auto" size={48} />,
      title: t('googleCloud.benefits.digitalTransformation.title'),
      description: t('googleCloud.benefits.digitalTransformation.description')
    }
  ];

  return (
    <section className="py-8 bg-azul-navy text-white">
      <h2 className="text-3xl font-bold mb-6 text-center pb-4">
        {t('googleCloud.benefits.title')}
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
            {benefit.icon}
            <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
              {benefit.title}
            </h3>
            <p className="text-gray-700 text-center">
              {benefit.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Beneficios;
