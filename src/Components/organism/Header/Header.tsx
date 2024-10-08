'use client';

import React from 'react';
import './HeaderStyle.scss';
import ImageAtom from '@/Components/atom/Image';
import logo from '@/assets/images/logo.svg';
import Input from '@/Components/atom/Input';
import Text from '@/Components/atom/Text';
import bellIcon from '@/assets/images/bell-icon.svg';
import Button from '@/Components/atom/Button';
import dropdown from '@/assets/images/dropdown.svg';
import searchIcon from '@/assets/images/search-icon.svg';
import avatar from '@/assets/images/avatar.svg';

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo-header">
        <ImageAtom src={logo} alt="logo" width={144.8} height={30} className="" />
      </div>
      <div className="header-search">
        <Input
          className="header-search__input"
          type="text"
          placeholder="Search for anything"
          value={''}
          onChange={(e) => console.log(e.target.value)}
        />
        <Button
          className="header-search__button"
          imageHeight={14}
          imageWidth={13.97}
          imageAlt="search icon"
          imageSrc={searchIcon}
        />
      </div>
      <div className="header__user-section">
        <div className="header__user-docs">
          <Text>{'Docs'}</Text>
        </div>
        <div className="header__user-notification">
          <ImageAtom src={bellIcon} alt="notification icon" width={26} height={26} />
        </div>
        <div className="header__user">
          <div className="header__user-img-container">
            <ImageAtom className="header__user-img" alt="avatar-icon" width={48} height={48} src={avatar} />
          </div>
          <div className="header__user-dropdown">
            <Button className="header__button" textValue="Adedeji" position="right" imageSrc={dropdown} />
          </div>
        </div>
      </div>
    </header>
  );
}
