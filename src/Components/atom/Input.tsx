import React, { FC, ChangeEvent } from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: FC<InputProps> = ({ type = 'text', placeholder, value, onChange, className }) => {
  return (
    <input type={type} placeholder={placeholder} value={value} onChange={onChange} className={`input ${className}`} />
  );
};

export default Input;
