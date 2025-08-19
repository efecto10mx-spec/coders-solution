"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { languages } from "@/app/i18n/settings";
import { useTranslation } from "@/app/i18n";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Logo from '@/public/logo.webp';

// Función para combinar clases condicionalmente
const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const Navbar = ({ lng }) => {
  const { t } = useTranslation(lng, 'navbar');

  // Obtener la ruta actual de la URL
  const [currentPath, setCurrentPath] = React.useState('');

  React.useEffect(() => {
    // Actualizar currentPath con la ruta actual
    const path = window.location.pathname.replace(`/${lng}`, '');
    setCurrentPath(path);
  }, [lng]);

  // Lista de servicios con rutas dinámicas
  const services = [
    { title: "AWS", href: `/${lng}/aws`, description: "Amazon Web Services" },
    { title: "Salesforce", href: `/${lng}/salesforce`, description: "Salesforce Services" },
    { title: "Google Cloud", href: `/${lng}/google-cloud`, description: "Google Cloud Solutions" },
  ];
  
  return (
    <nav className="flex justify-between fixed top-0 bg-white w-full px-8 z-50">
      <Link href="/" className="flex-shrink-0">
        <Image src={Logo} alt="Company Logo" width={70} height={50} />
      </Link>
      <div className="flex flex-row">
        <div className="my-auto space-x-8 mx-8 ">
          {languages.map((l) => (
            <Link href={`/${l}${currentPath}`} key={l}>
              <span className={`uppercase ${lng === l ? 'font-bold' : 'hover:text-xl'}`}>
                {l}
              </span>
            </Link>
          ))}
        </div>

        <NavigationMenu>
          {/* Menu Items */}
          <div className="flex items-center space-x-4 w-full">
            <NavigationMenuList className="flex items-center space-x-4 w-full">
              <NavigationMenuItem>
                <Link href="/" passHref>
                  <NavigationMenuLink className="block select-none p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[300px] md:min-w-[500px] xl:min-w-[500px] w-auto">
                  <ul className="grid gap-3 p-4 w-auto">
                    {services.map((service) => (
                      <ListItem key={service.title} title={service.title} href={service.href}>
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </div>
        </NavigationMenu>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={classNames(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";















