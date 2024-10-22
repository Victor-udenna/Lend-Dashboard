'use client';

import Button from '@/Components/atom/Button';
import './UserDetailsStyle.scss';
import arrow from '@/assets/images/arrow-left-long.svg';
import ImageAtom from '@/Components/atom/Image';
import userAvatar from '@/assets/images/detail-avatar.svg';
import Text from '@/Components/atom/Text';
import starFill from '@/assets/images/star-fill.svg';
import starline from '@/assets/images/star-line.svg';
import { useRouter } from 'next/navigation';

export default function UserDetails() {
  const router = useRouter();
  return (
    <div className="details">
      <Button
        onClick={() => {
          router.push('/dashboard/users');
        }}
        imageSrc={arrow}
        imageHeight={9.38}
        imageWidth={26.72}
        imageAlt="back to user button"
        position="left"
        textValue="Back to Users"
        className="details-back__btn"
      />

      <div className="details__header">
        <div className="details__header__cta">
          <h2 className="details__header__text">User details</h2>
          <div className="details__button__container">
            <Button className="details__blacklist__btn" textValue="Blacklist User" />
            <Button className="details__activate__btn" textValue="Activate User" />
          </div>
        </div>

        <div className="details__header__container">
          <div className="details__header_content">
            <ImageAtom className="details__header__img" width={100} height={100} alt="user-avatar" src={userAvatar} />

            <div className="details__header__text__container">
              <Text className="user__name">{'Grace Effiom'}</Text>
              <Text className="user__id">{'LSQFf587g90'}</Text>
            </div>
            <div className="details__header__text__container user__tier__container">
              <Text className="user__tier">{'User’s Tier'}</Text>
              <div className="user__tier__rate">
                <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starline} />
                <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starline} />
              </div>
            </div>
            <div className="details__header__text__container">
              <Text className="user__loan">{'₦200,000.00'}</Text>
              <Text className="user__bank">{'9912345678/Providus Bank'}</Text>
            </div>
          </div>

          <div className="details__header__link-container">
            <Text className="details__header__link active">{'General Details'}</Text>
            <Text className="details__header__link">{'Documents'}</Text>
            <Text className="details__header__link">{'Bank Details'}</Text>
            <Text className="details__header__link">{'Loans'}</Text>
            <Text className="details__header__link">{'Loans'}</Text>
            <Text className="details__header__link">{'App and System'}</Text>
          </div>
        </div>
      </div>

      <div className="details__body">
        <div className="details__information">
          <Text className="details___information__header">{'Personal Information'}</Text>
          <div className="details_information__wrapper">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Full Name'}</Text>
              <Text className="details__information__text">{'Grace Effiom'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Phone Number'}</Text>
              <Text className="details__information__text">{'07060780922'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Email Address'}</Text>
              <Text className="details__information__text">{'grace@gmail.com'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Bvn'}</Text>
              <Text className="details__information__text">{'07060780922'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Gender'}</Text>
              <Text className="details__information__text">{'Female'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Marital status'}</Text>
              <Text className="details__information__text">{'Single'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Children'}</Text>
              <Text className="details__information__text">{'None'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Type of residence'}</Text>
              <Text className="details__information__text">{'Parent’s Apartment'}</Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Education and Employment'}</Text>
          <div className="details_information__wrapper details_information__wrapper_2">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'level of education'}</Text>
              <Text className="details__information__text">{'B.Sc'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'employment status'}</Text>
              <Text className="details__information__text">{'Employed'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'sector of employment'}</Text>
              <Text className="details__information__text">{'FinTech'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Duration of employment'}</Text>
              <Text className="details__information__text">{'2 years'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'office email'}</Text>
              <Text className="details__information__text">{'grace@lendsqr.com'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Monthly income'}</Text>
              <Text className="details__information__text">{'₦200,000.00- ₦400,000.00'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'loan repayment'}</Text>
              <Text className="details__information__text">{'40,000'}</Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Socials'}</Text>
          <div className="details_information__wrapper">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Twitter'}</Text>
              <Text className="details__information__text">{'@grace_effiom'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Facebook'}</Text>
              <Text className="details__information__text">{'Grace Effiom'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Instagram'}</Text>
              <Text className="details__information__text">{'@grace_effiom'}</Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Guarantor'}</Text>
          <div className="details_information__wrapper">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Full Name'}</Text>
              <Text className="details__information__text">{'Grace Effiom'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Phone Number'}</Text>
              <Text className="details__information__text">{'07060780922'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Email Address'}</Text>
              <Text className="details__information__text">{'grace@gmail.com'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Relationship'}</Text>
              <Text className="details__information__text">{'Sister'}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
