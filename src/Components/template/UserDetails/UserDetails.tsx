'use client';

import Button from '@/Components/atom/Button';
import './UserDetailsStyle.scss';
import arrow from '@/assets/images/arrow-left-long.svg';
import ImageAtom from '@/Components/atom/Image';
import userAvatar from '@/assets/images/detail-avatar.svg';
import Text from '@/Components/atom/Text';
import starFill from '@/assets/images/star-fill.svg';
import starline from '@/assets/images/star-line.svg';
import { useRouter, useSearchParams } from 'next/navigation';
import db, { updateUserStatus } from '@/lib/db';
import { useLiveQuery } from 'dexie-react-hooks';

export default function UserDetails() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const userId = searchParams.get('userid');
  const user = useLiveQuery(() => {
    if (userId) {
      return db.users.where('userid').equals(userId).first();
    }
  });

  const handleStatusChange = async (userId: number, newStatus: string) => {
    await updateUserStatus(userId, newStatus);
    window.location.reload();
  };

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
            {user?.status === 'blacklisted' || user?.status === 'pending' || user?.status === 'inactive' ? (
              <Button
                onClick={() => {
                  handleStatusChange(user?.id, 'active');
                }}
                className="details__activate__btn"
                textValue="Activate User"
              />
            ) : (
              user?.id && (
                <Button
                  onClick={() => {
                    handleStatusChange(user?.id, 'blacklisted');
                  }}
                  className="details__blacklist__btn"
                  textValue="Blacklist User"
                />
              )
            )}
          </div>
        </div>

        <div className="details__header__container">
          <div className="details__header_content">
            <ImageAtom className="details__header__img" width={100} height={100} alt="user-avatar" src={userAvatar} />

            <div className="details__header__text__container">
              <Text className="user__name">
                {user ? user?.personal_information?.firstname + ' ' + user?.personal_information?.lastname : 'loading'}
              </Text>
              <Text className="user__id">{user ? user?.userid.slice(0, 15) : 'loading'}</Text>
            </div>
            <div className="details__header__text__container user__tier__container">
              <Text className="user__tier">{'User’s Tier'}</Text>

              {user?.user_tier === 1 && (
                <div className="user__tier__rate">
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starline} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starline} />
                </div>
              )}

              {user?.user_tier === 2 && (
                <div className="user__tier__rate">
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starline} />
                </div>
              )}

              {user?.user_tier === 3 && (
                <div className="user__tier__rate">
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                  <ImageAtom alt="user tier icon" width={14.08} height={13.43} src={starFill} />
                </div>
              )}
            </div>
            <div className="details__header__text__container">
              <Text className="user__loan">{user ? '₦' + user?.account_balance?.toLocaleString() : 'loading'}</Text>
              <Text className="user__bank">{`${user ? user.account_number : 'loading'}/${
                user ? user.bank : 'loading'
              }`}</Text>
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
              <Text className="details__information__text">
                {user ? user.personal_information.firstname + ' ' + user.personal_information.lastname : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Phone Number'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.phone_number : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Email Address'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.email : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'BVN'}</Text>
              <Text className="details__information__text">{user ? user.personal_information.bvn : 'Loading...'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Gender'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.gender : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Marital Status'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.marital_status : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Children'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.children : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Type of Residence'}</Text>
              <Text className="details__information__text">
                {user ? user.personal_information.residence_type : 'Loading...'}
              </Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Education and Employment'}</Text>
          <div className="details_information__wrapper details_information__wrapper_2">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Level of Education'}</Text>
              <Text className="details__information__text">
                {user ? user.education_employment.education_level : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Employment Status'}</Text>
              <Text className="details__information__text">
                {user ? (user.education_employment.is_employed ? 'Employed' : 'Unemployed') : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Sector of Employment'}</Text>
              <Text className="details__information__text">
                {user ? user.education_employment.employment_sector : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Duration of Employment'}</Text>
              <Text className="details__information__text">
                {user ? user.education_employment.employment_duration + ' years' : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Office Email'}</Text>
              <Text className="details__information__text">
                {user ? user.education_employment.office_email : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Monthly Income'}</Text>
              <Text className="details__information__text">
                {user
                  ? '₦' +
                    user.education_employment.min_monthly_income?.toLocaleString() +
                    ' - ₦' +
                    user.education_employment.max_monthly_income?.toLocaleString()
                  : 'Loading...'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Loan Repayment'}</Text>
              <Text className="details__information__text">
                {user ? '₦' + user.education_employment.loan_repayment?.toLocaleString() : 'Loading...'}
              </Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Socials'}</Text>
          <div className="details_information__wrapper">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Twitter'}</Text>
              <Text className="details__information__text">{user ? user.socials.twitter : 'loading'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Facebook'}</Text>
              <Text className="details__information__text">{user ? user.socials.facebook : 'loading'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Instagram'}</Text>
              <Text className="details__information__text">{user ? user.socials.instagram : 'loading'}</Text>
            </div>
          </div>
        </div>
        <div className="details__information">
          <Text className="details___information__header">{'Guarantor'}</Text>
          <div className="details_information__wrapper">
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Full Name'}</Text>
              <Text className="details__information__text">
                {user ? user?.guarantor?.firstname + ' ' + user?.guarantor?.lastname : 'loading'}
              </Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Phone Number'}</Text>
              <Text className="details__information__text">{user ? user?.guarantor?.phone_number : 'loading'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Email Address'}</Text>
              <Text className="details__information__text">{user ? user?.guarantor?.email : 'loading'}</Text>
            </div>
            <div className="details__information__container">
              <Text className="details__information__header__text">{'Relationship'}</Text>
              <Text className="details__information__text">{user ? user?.guarantor?.relationship : 'loading'}</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
