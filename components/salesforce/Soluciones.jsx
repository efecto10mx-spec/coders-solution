import React from 'react';
import { Cloud, Star, Code, BarChart, ShoppingBag, Database, Factory, Globe, CircleDollarSign } from 'lucide-react';

const Soluciones = ({ t }) => {
    return (
        <section className="py-8 bg-azul-navy text-white">
            <h2 className="text-3xl font-bold mb-6 text-center pb-4">
                {t('salesforceSolutions.title')}
            </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <Cloud className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.salesCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.salesCloud.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
            <Star className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.serviceCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.serviceCloud.description')}
          </p>
        </li> 
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <BarChart className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.marketingCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.marketingCloud.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <Code className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.mulesoft.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.mulesoft.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <Globe className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.salesforcePlatform.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.salesforcePlatform.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <ShoppingBag className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.commerceCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.commerceCloud.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <CircleDollarSign className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.financialServicesCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.financialServicesCloud.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <Database className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.dataCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.dataCloud.description')}
          </p>
        </li>
        <li className="border-8 border-azul-cielo p-6 bg-white rounded-lg shadow-lg">
          <Factory className="text-azul-navy mb-4 mx-auto" size={48} />
          <h3 className="text-2xl font-bold text-center text-azul-cielo mb-2">
            {t('salesforceSolutions.manufacturingCloud.title')}
          </h3>
          <p className="text-gray-700 text-center">
            {t('salesforceSolutions.manufacturingCloud.description')}
          </p>
        </li> 
      </ul>
    </section>
  );
}

export default Soluciones;
