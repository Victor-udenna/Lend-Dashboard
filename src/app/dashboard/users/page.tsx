import './userPageStyle.scss';
import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text';
import userIcon from '@/assets/images/user.svg';
import activeIcon from '@/assets/images/active-user.svg';
import userLoan from '@/assets/images/user-loan.svg';
import userSaving from '@/assets/images/usersaving.svg';
import UserTable from '@/Components/organism/UserTable/UserTable';

export default function UserPage() {
  return (
    <div className="userpage">
      <h2 className="userpage__header-text">Users</h2>
      <div className="userpage__summary-container">
        <div className="userpage__summary-card">
          <ImageAtom src={userIcon} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users'}</Text>
          <Text className="userpage__summary-card-count">{'2,453'}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={activeIcon} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Active Users'}</Text>
          <Text className="userpage__summary-card-count">{'2,453'}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={userLoan} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users with Loans'}</Text>
          <Text className="userpage__summary-card-count">{'12,453'}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={userSaving} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users with Savings'}</Text>
          <Text className="userpage__summary-card-count">{'102,453'}</Text>
        </div>
      </div>
      <UserTable />
    </div>
  );
}
