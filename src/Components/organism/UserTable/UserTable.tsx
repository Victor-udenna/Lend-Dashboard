'use client';
import { useState } from 'react';
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
import { useRouter } from 'next/navigation';

export default function UserTable({ data }: any) {
  const router = useRouter();

  const [filter, setFilter] = useState(false);

  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  console.log(data);
  return (
    <div className="user-table__container">
      {data ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <div className="user-table__header">
                  <Text>ORGANIZATION</Text>
                  <ImageAtom
                    onClick={() => {
                      toggleFilter();
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
                  <ImageAtom
                    onClick={() => {
                      toggleFilter();
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
            {data.map((user: any) => {
              return (
                <tr
                  key={user.userid}
                  onClick={() => {
                    router.push('/dashboard/users/details');
                  }}
                  className="user-table__row"
                >
                  <td className="user-table__organization">{'Lendsqr'}</td>
                  <td className="user-table__username">
                    {user.personal_information.firstname + ' ' + user.personal_information.lastname}
                  </td>
                  <td className="user-table__email">{user.personal_information.email.substring(0, 15)}</td>
                  <td className="user-table__phone">{user.personal_information.phone_number.substring(0, 10)}</td>
                  <td className="user-table__date-joined">{new Date(user.dateJoined).toLocaleDateString()}</td>
                  <td className="user-table__status">
                    <Text className={`user-table__status-text ${user.status}`}> {user.status}</Text>
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
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          {' '}
          <Text>{'loading...'}</Text>
        </div>
      )}

      {filter && <TableFilter />}
    </div>
  );
}
