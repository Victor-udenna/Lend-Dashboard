'use client';
import { useState, useEffect, useRef } from 'react';
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
import { User } from '@/lib/db';
import EmptyState from '@/Components/molecules/EmptyState/EmptyState';

interface UserTableProps {
  readonly data: readonly User[];
}

interface FilterValues {
  organization?: string;
  username?: string;
  email?: string;
  date?: string;
  phoneNumber?: string;
  status?: string;
}

export default function UserTable({ data }: UserTableProps) {
  const router = useRouter();
  const [filter, setFilter] = useState(false);
  const [selectedId, setSelectedId] = useState<string>('');
  const [isPopup, setIspopUp] = useState(false);
  const [filterData, setFilterData] = useState<FilterValues>({});
  const [filteredData, setFilteredData] = useState<User[]>([...data]);
  const filterRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setFilter((prev) => !prev);
  };

  const handlePopup = (userId: string) => {
    setIspopUp((prev) => !prev);
    setSelectedId(userId);
  };

  const applyFilter = (filterValues: FilterValues) => {
    setFilterData(filterValues);

    const newFilteredData = data.filter((user) => {
      const { username = '', email = '', date = '', phoneNumber = '', status = '' } = filterValues;

      return (
        (!username ||
          `${user.personal_information.firstname} ${user.personal_information.lastname}`
            .toLowerCase()
            .includes(username.toLowerCase())) &&
        (!email || user.personal_information.email.toLowerCase().includes(email.toLowerCase())) &&
        (!date || new Date(user.dateJoined).toLocaleDateString() === new Date(date).toLocaleDateString()) &&
        (!phoneNumber || user.personal_information.phone_number.includes(phoneNumber)) &&
        (!status || user.status.toLowerCase() === status.toLowerCase())
      );
    });

    setFilteredData(newFilteredData);
    setFilter(false);
  };

  useEffect(() => {
    setFilteredData([...data]);
  }, [data]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setFilter(false);
      }
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        setIspopUp(false);
        setSelectedId('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="user-table__container" ref={tableRef}>
      {filter && (
        <div ref={filterRef}>
          <TableFilter onFilterApply={applyFilter} />
        </div>
      )}
      {filteredData.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>
                <div className="user-table__header">
                  <Text>ORGANIZATION</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th>
                <div className="user-table__header">
                  <Text>USERNAME</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th>
                <div className="user-table__header">
                  <Text>EMAIL</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th>
                <div className="user-table__header">
                  <Text>PHONE NUMBER</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th>
                <div className="user-table__header">
                  <Text>DATE JOINED</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th>
                <div className="user-table__header">
                  <Text>STATUS</Text>
                  <ImageAtom onClick={toggleFilter} alt="filter-icon" width={16} height={16} src={filterIcon} />
                </div>
              </th>
              <th className="user-table__moreaction">
                <Text>{'More'}</Text>
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredData.map((user: User, i: number) => (
              <tr key={user.userid} className="user-table__row">
                <td className="user-table__organization">{'Lendsqr'}</td>
                <td
                  tabIndex={i}
                  onClick={() => router.push('/dashboard/users/details')}
                  className="user-table__username"
                >
                  {user.personal_information.firstname + ' ' + user.personal_information.lastname}
                </td>
                <td className="user-table__email">{user.personal_information.email.substring(0, 15)}</td>
                <td className="user-table__phone">{user.personal_information.phone_number.substring(0, 10)}</td>
                <td className="user-table__date-joined">{new Date(user.dateJoined).toLocaleDateString()}</td>
                <td className="user-table__status">
                  <Text className={`user-table__status-text ${user.status}`}>{user.status}</Text>
                </td>
                <td>
                  <Button
                    className="user-table__actionbtn"
                    imageAlt="more action button"
                    imageHeight={14.44}
                    imageWidth={3.33}
                    imageSrc={moreactionImg}
                    onClick={() => handlePopup(user.userid)}
                  />
                  {selectedId === user.userid && isPopup && (
                    <div ref={popupRef} className="user-table__menu">
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
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="user-table__empty-state">
          <EmptyState title="No data Found" desc="try refreshing this page to view data" />
        </div>
      )}
    </div>
  );
}
