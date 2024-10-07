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
}

const Button: FC<ButtonProps> = ({
  textValue,
  imageSrc,
  imageAlt = '',
  imageWidth = 24,
  imageHeight = 24,
  onClick,
  className = '',
}) => {
  return (
    <button className={className} onClick={onClick}>
      {imageSrc && <Image src={imageSrc} alt={imageAlt} width={imageWidth} height={imageHeight} />}
      {textValue && <span>{textValue}</span>}
    </button>
  );
};

export default Button;
