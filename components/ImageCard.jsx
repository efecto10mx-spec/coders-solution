import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';

const ImageCard = ({ image, altText }) => {
  return (
    <div className='flex justify-center items-center h-60 w-60 mx-auto'>
      <Card className="w-full max-w-sm">
        <CardContent className="flex aspect-square items-center justify-center p-6">
          <Image src={image} alt={altText} className="w-full h-full object-contain"/>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImageCard;
