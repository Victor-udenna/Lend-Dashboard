'use client';

import { useState } from 'react';
import Button from '@/Components/atom/Button';
import Input from '@/Components/atom/Input';
import './LoginFormStyle.scss';
import Text from '@/Components/atom/Text';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="login-form">
      <div className="login-form__text-container">
        <h1 className="login-form__headertext">Welcome!</h1>
        <Text className="login-form__text">Enter details to login.</Text>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="login-form__input-container">
          <div className="login-form__input-wrapper">
            <Input
              className="login-form__input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-form__input-wrapper">
            <Input
              className="login-form__input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span role="button" tabIndex={2} className="login-form__pasword-reveal" onClick={() => {}}>
              Show
            </span>
          </div>
        </div>
        <Text className="login-form__forgot-password">{'Forgot PASSWORD?'}</Text>
        <Button className="login-form__button" textValue="LOG IN" />
      </form>
    </div>
  );
}
