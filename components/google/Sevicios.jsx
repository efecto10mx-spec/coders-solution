import React from 'react';
import { Server, Code, Database, Cloud, Box, SquareFunction } from 'lucide-react';

const Servicios = ({ t }) => {
  const services = [
    {
      icon: <Server className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpComputeEngine.title'),
      description: t('googleCloud.services.gcpComputeEngine.description')
    },
    {
      icon: <Code className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpAppEngine.title'),
      description: t('googleCloud.services.gcpAppEngine.description')
    },
    {
      icon: <Box className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpKubernetesEngine.title'),
      description: t('googleCloud.services.gcpKubernetesEngine.description')
    },
    {
      icon: <Database className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpBigQuery.title'),
      description: t('googleCloud.services.gcpBigQuery.description')
    },
    {
      icon: <Cloud className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpCloudStorage.title'),
      description: t('googleCloud.services.gcpCloudStorage.description')
    },
    {
      icon: <SquareFunction className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('googleCloud.services.gcpCloudFunctions.title'),
      description: t('googleCloud.services.gcpCloudFunctions.description')
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{t('googleCloud.services.title')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              {service.icon}
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;
