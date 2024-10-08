import React, { FC } from 'react';
import Image from 'next/image';

interface ButtonProps {
  textValue?: string;
  imageSrc?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
  onClick?: () => void;
  className?: string;
  position?: 'left' | 'right'; // New prop to set the position of the image
}

const Button: FC<ButtonProps> = ({
  textValue,
  imageSrc,
  imageAlt = '',
  imageWidth = 24,
  imageHeight = 24,
  onClick,
  className = '',
  position = 'left'
}) => {
  return (
    <button className={className} onClick={onClick}>
      {position === 'left' && imageSrc && (
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
      )}
      {textValue && <span>{textValue}</span>}
      {position === 'right' && imageSrc && (
        <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />
      )}
    </button>
  );
};

export default Button;
