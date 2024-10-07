import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageProps {
  src: string | StaticImageData;
  alt: string;
  width: number;
  height: number;
  className?: string;
  unOptimized?: boolean;
}

const ImageAtom: FC<ImageProps> = ({ src, alt, unOptimized, width, height, className = '' }) => {
  return <Image unoptimized={unOptimized} src={src} alt={alt} width={width} height={height} className={className} />;
};

export default ImageAtom;
