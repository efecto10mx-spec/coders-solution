import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';

const CarouselComponent = ({ images }) => {
  return (
    <div className='flex mx-auto my-8 justify-center max-w-7xl px-8 lg:px-0'>
      <Carousel className="w-full">
        <CarouselContent className="-ml-1 flex gap-4">
          {images.map((image, index) => (
            <CarouselItem 
              key={index} 
              className="
                pl-1 
                sm:basis-[calc(50%-8px)] 
                md:basis-[calc(33.33%-12px)] 
                lg:basis-[calc(25%-16px)] 
                xl:basis-[calc(20%-20px)]"
            >
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center aspect-square">
                    <Image 
                      src={image.src} 
                      alt={image.alt} 
                      className="object-contain w-full h-full"
                      width={300}
                      height={300}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 top-1/2" />
        <CarouselNext className="absolute right-0 transform -translate-y-1/2 top-1/2" />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;







