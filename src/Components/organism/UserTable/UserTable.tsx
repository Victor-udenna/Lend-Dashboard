'use client';

import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text';
import filterIcon from '@/assets/images/filter-icon.svg';
import './UserTableStyle.scss';
import Button from '@/Components/atom/Button';
import moreactionImg from '@/assets/images/moreaction.svg';
import viewIcon from '@/assets/images/eye-icon.svg';
import TableFilter from '@/Components/molecules/TableFilter/TableFilter';
import activeUserIcon from '@/assets/images/active-user-btn.svg';
import blackListuser from '@/assets/images/blacklist.svg';

export default function UserTable() {
  const checkFunction = () => {
    console.log('it works');
  };
  return (
    <div className="user-table__container">
      <table className="user-table">
        <thead>
          <tr>
            <th>
              <div className="user-table__header">
                <Text>ORGANIZATION</Text>
                <ImageAtom
                  onClick={() => {
                    checkFunction();
                  }}
                  alt="filter-icon"
                  width={16}
                  height={16}
                  src={filterIcon}
                />
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
            <th className="user-table__moreaction">
              <Text>{'More'}</Text>
              <div className="user-table__menu">
                <Button
                  position="left"
                  imageHeight={9.73}
                  imageWidth={15.1}
                  imageSrc={viewIcon}
                  textValue="View Details"
                />
                <Button
                  position="left"
                  imageHeight={14}
                  imageWidth={14}
                  imageSrc={blackListuser}
                  textValue="Blacklist User"
                />
                <Button
                  position="left"
                  imageHeight={14}
                  imageWidth={14}
                  imageSrc={activeUserIcon}
                  textValue="Activate User"
                />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
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
            <td>
              <Button
                className="user-table__actionbtn"
                imageAlt="more actione button"
                imageHeight={14.44}
                imageWidth={3.33}
                imageSrc={moreactionImg}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <TableFilter />
    </div>
  );
}
