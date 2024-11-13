import './UserCardStyle.scss';
import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text';

type usercard = {
  firstname: string;
  lastname: string;
  amount: string;
  status: string;
};

export default function UserCard({ firstname, lastname, amount, status }: usercard) {
  return (
    <div className="user-card">
      <div className="user-card__header">
        <ImageAtom
          alt=""
          width={70}
          height={70}
          className="user-image"
          src={`https://ui-avatars.com/api/?name=${firstname}+${lastname}&background=39cdcc&color=ffffff&size=100&rounded=true`}
        />
        <div className="user-card__details">
          <Text className="user-fullname">{firstname + ' ' + lastname}</Text>
          <Text className={`user-status ${status}`}>{status}</Text>
        </div>
      </div>
      <div className="user-card-footer">
        <Text className="user-card__footer__header">{'Loan:'}</Text>
        <Text>{`₦ ${amount}`}</Text>
      </div>
    </div>
  );
}
