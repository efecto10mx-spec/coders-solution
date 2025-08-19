import React from 'react'
import { UserCircle, Briefcase, Headset } from 'lucide-react'; // Importamos los iconos

const Servicios = ({t}) => {
  return (
    <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center mb-8">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Customer 360 */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <UserCircle className="mx-auto text-blue-500 mb-4" size={48} />
          <h3 className="text-2xl font-semibold">{t('customer360.title')}</h3>
          <p className="mt-4 text-gray-600">{t('customer360.description')}</p>
        </div>

        {/* Consultoría Salesforce */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Briefcase className="mx-auto text-green-500 mb-4" size={48} />
          <h3 className="text-2xl font-semibold">{t('salesforceConsulting.title')}</h3>
          <p className="mt-4 text-gray-600">{t('salesforceConsulting.description')}</p>
        </div>

        {/* Soporte Continuo */}
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <Headset className="mx-auto text-red-500 mb-4" size={48} />
          <h3 className="text-2xl font-semibold">{t('ongoingSupport.title')}</h3>
          <p className="mt-4 text-gray-600">{t('ongoingSupport.description')}</p>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default Servicios