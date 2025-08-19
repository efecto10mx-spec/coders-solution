import React from 'react';
import { AlignJustify, BarChart, Briefcase, Shield, Code, UserCheck } from 'lucide-react';

const Beneficios = ({ t }) => {
    const benefits = [
        {
            icon: <AlignJustify className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.flexibilityScalability.title'),
            description: t('aws.benefits.flexibilityScalability.description')
        },
        {
            icon: <BarChart className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.costEfficiency.title'),
            description: t('aws.benefits.costEfficiency.description')
        },
        {
            icon: <Briefcase className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.performanceImprovement.title'),
            description: t('aws.benefits.performanceImprovement.description')
        },
        {
            icon: <Shield className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.securityCompliance.title'),
            description: t('aws.benefits.securityCompliance.description')
        },
        {
            icon: <Code className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.acceleratedInnovation.title'),
            description: t('aws.benefits.acceleratedInnovation.description')
        },
        {
            icon: <UserCheck className="text-azul-navy mb-4 mx-auto" size={48} />,
            title: t('aws.benefits.digitalEvolution.title'),
            description: t('aws.benefits.digitalEvolution.description')
        }
    ];

    return (
        <section className="py-8 bg-azul-navy text-white">
            <h2 className="text-3xl font-bold mb-6 text-center pb-4">
                {t('aws.benefits.title')}
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

