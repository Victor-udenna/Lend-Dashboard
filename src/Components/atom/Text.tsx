import React, { FC, ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const Text: FC<TextProps> = ({ children, onClick, className = '' }) => {
  return (
    <p onClick={onClick} className={className}>
      {children}
    </p>
  );
};

export default Text;
