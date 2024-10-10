import Button from '@/Components/atom/Button';
import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text';
import filterIcon from '@/assets/images/filter-icon.svg';
import './UserTableStyle.scss';

export default function UserTable() {
  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>
            <div className="user-table__header">
              <Text>ORGANIZATION</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
          <th>
            <div className="user-table__header">
              <Text>USERNAME</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
          <th>
            <div className="user-table__header">
              <Text>EMAIL</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
          <th>
            <div className="user-table__header">
              <Text>PHONE NUMBER</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
          <th>
            <div className="user-table__header">
              <Text>DATE JOINED</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
          <th>
            <div className="user-table__header">
              <Text>STATUS</Text>
              <ImageAtom alt="filter-icon" width={16} height={16} src={filterIcon} />
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text inactive">{'Inactive'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text blacklist">{'Blacklisted'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text pending">{'Pending'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text active">{'Active'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text inactive">{'Inactive'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text pending">{'Pending'}</Text>
          </td>
        </tr>
        <tr className="user-table__row">
          <td className="user-table__organization">Lendsqr</td>
          <td className="user-table__username">Adedeji</td>
          <td className="user-table__email">adedeji@lendsqr.com</td>
          <td className="user-table__phone">08078903721</td>
          <td className="user-table__date-joined">May 15, 2020 10:00 AM</td>
          <td className="user-table__status">
            <Text className="user-table__status-text active">{'Active'}</Text>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
