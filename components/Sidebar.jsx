import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import Link from 'next/link';
import { Card } from "@/components/ui/card";

const Sidebar = () => {
  return (
    <div className="fixed top-20 left-0 p-4 flex flex-col items-center space-y-4 z-40">
      <Card className="p-2 border-4 border-azul-cielo">
        <Link href="https://www.facebook.com/profile.php?id=100088078485026&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={24} className="text-blue-600" />
        </Link>
      </Card>
      <Card className="p-2 border-4 border-azul-cielo">
        <Link href="https://www.instagram.com/coderssolution?igsh=OHlwNTYxa3J4ajBo&utm_source=qr" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} className="text-pink-500" />
        </Link>
      </Card>
      <Card className="p-2 border-4 border-azul-cielo">
        <Link href="https://www.linkedin.com/company/coders-solution" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={24} className="text-blue-700" />
        </Link>
      </Card>
      <Card className="p-2 border-4 border-azul-cielo">
        <Link href="https://www.tiktok.com/@coders.solution?_t=8oofAI9f1rZ&_r=1" target="_blank" rel="noopener noreferrer">
          <FaTiktok size={24} className="text-black" />
        </Link>
      </Card>
    </div>
  );
};

export default Sidebar;

