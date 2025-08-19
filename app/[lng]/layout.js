import '../globals.css'
import { GoogleTagManager } from '@next/third-parties/google'
import { dir } from 'i18next'
import { languages } from '../i18n/settings'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import WhatsApp from '@/components/WhatsApp'

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }))
}


export default function RootLayout({
  children,
  params: {
    lng
  }
}) {
  return (
    <html lang={lng} dir={dir(lng)}>
      <head />
      <body>
        <GoogleTagManager gtmId="GTM-TD6R7CGW" />
        <Sidebar/>
        <WhatsApp/>
        <Navbar lng={lng}/>
        {children}
        <Footer lng={lng}/>
      </body>
    </html>
  )
}



