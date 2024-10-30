'use client';
import React, { useEffect, useState } from 'react';
import './UserTemplateStyle.scss';
import ImageAtom from '@/Components/atom/Image';
import Text from '@/Components/atom/Text';
import userIcon from '@/assets/images/user.svg';
import activeIcon from '@/assets/images/active-user.svg';
import userLoan from '@/assets/images/user-loan.svg';
import userSaving from '@/assets/images/usersaving.svg';
import UserTable from '@/Components/organism/UserTable/UserTable';
import Pagination from '@/Components/molecules/Pagination/Pagination';
import db, { User } from '@/lib/db';
import useUserCount from '@/lib/userCount';

export default function UserTemplate() {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [animatedCount, setAnimatedCount] = useState({
    totalUsers: 0,
    activeUsers: 0,
    userwithLoan: 0,
    userwithSavings: 0,
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const users = await db.users.toArray();
        setUsers(users);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }

    fetchUsers();
  }, []);

  const { totalUsers, activeUsers, userwithLoan, userwithSavings } = useUserCount(users);

  const paginatedUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);  
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  useEffect(() => {
    const duration = 200;

    const animateCount = (targetValue: number, field: keyof typeof animatedCount) => {
      const step = Math.ceil(targetValue / (duration / 10));
      const interval = setInterval(() => {
        setAnimatedCount((prev) => {
          if (prev[field] < targetValue) {
            const newValue = Math.min(prev[field] + step, targetValue);
            return { ...prev, [field]: newValue };
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 10);
    };

    animateCount(totalUsers, 'totalUsers');
    animateCount(activeUsers, 'activeUsers');
    animateCount(userwithLoan, 'userwithLoan');
    animateCount(userwithSavings, 'userwithSavings');
  }, [totalUsers, activeUsers, userwithLoan, userwithSavings]);

  return (
    <div className="userpage">
      <h2 className="userpage__header-text">Users</h2>
      <div className="userpage__summary-container">
        <div className="userpage__summary-card">
          <ImageAtom src={userIcon} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users'}</Text>
          <Text className="userpage__summary-card-count">{animatedCount.totalUsers}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={activeIcon} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Active Users'}</Text>
          <Text className="userpage__summary-card-count">{animatedCount.activeUsers}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={userLoan} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users with Loans'}</Text>
          <Text className="userpage__summary-card-count">{animatedCount.userwithLoan}</Text>
        </div>
        <div className="userpage__summary-card">
          <ImageAtom src={userSaving} width={40} height={40} alt="summary icon" />
          <Text className="userpage__summary-card-title">{'Users with Savings'}</Text>
          <Text className="userpage__summary-card-count">{animatedCount.userwithSavings}</Text>
        </div>
      </div>
      <UserTable data={paginatedUsers} />
      <Pagination
        totalCount={users.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </div>
  );
}
