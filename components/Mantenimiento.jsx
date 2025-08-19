import React from 'react'
import Image from 'next/image'
import Mantenimiento from '@/public/mantenimiento.svg'

const page = () => {
  return (
    <div>
      <h1>Pagina en mantenimiento</h1>
      <Image src={Mantenimiento} alt="Mantenimiento" width={600} height={400} />
    </div>
  )
}

export default page