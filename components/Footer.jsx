// Footer.jsx

import React from "react";
import Image from "next/image";
import Logo from '@/public/logoblanco.webp';
import { useTranslation } from "../app/i18n";

export async function Footer({ lng }) {
  const { t } = await useTranslation(lng, "footer");

  return (
    <footer className="bg-azul-navy text-white ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center mb-6 md:mb-0">
          <Image src={Logo} alt="Company Logo" width={120} height={120} className="mr-4" />
          <span className="text-xl font-semibold">Coders Solution</span>
        </div>

        {/* Contact Info */}
        <div className="mt-6 md:mt-0">
          <p className="text-sm mb-2">{t('footer.places')}</p>
          <p className="text-sm mb-2">{t('footer.phone')}: (+52) 5580684520</p>
          <p className="text-sm mb-2">Email: contacto@coders-solution.com</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-azul-cielo py-2 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Coders Solution. All rights reserved.</p>
      </div>
    </footer>
  );
}
