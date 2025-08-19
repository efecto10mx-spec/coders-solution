import React from 'react';
import { Cloud, Code, Shield, Database, Box, GitBranch } from 'lucide-react';

const Servicios = ({ t }) => {
  const services = [
    {
      icon: <Cloud className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsMachineLearning.title'),
      description: t('aws.services.awsMachineLearning.description')
    },
    {
      icon: <GitBranch className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsMigration.title'),
      description: t('aws.services.awsMigration.description')
    },
    {
      icon: <Database className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsDataMigration.title'),
      description: t('aws.services.awsDataMigration.description')
    },
    {
      icon: <Shield className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsSecurity.title'),
      description: t('aws.services.awsSecurity.description')
    },
    {
      icon: <Box className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsElasticKubernetes.title'),
      description: t('aws.services.awsElasticKubernetes.description')
    },
    {
      icon: <Code className="w-16 h-16 text-azul-cielo mb-4" />,
      title: t('aws.services.awsDevOps.title'),
      description: t('aws.services.awsDevOps.description')
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">{t('aws.services.title')}</h2>
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

