'use client';

import React, { useEffect, useState } from 'react';
import DashboardChart from '@/Components/organism/DashboardChart/DashboardChart';
import './DashboardTemplateStyle.scss';
import UserCard from '@/Components/molecules/UserCard/UserCard';
import Text from '@/Components/atom/Text';
import db, { User } from '@/lib/db';

export default function DashboardTemplate() {
  const [users, setUsers] = useState<User[]>([]);

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

  return (
    <div className="dashboard">
      <h1 className="header-text">Welcome, Admin Adedeji</h1>
      <div className="new-users">
        <div className="new-user__header">
          <h2 className="new-user___header-text">{'Newly Added Users'}</h2>
          <Text className="new-user_link">{'View all Users'}</Text>
        </div>
        <div className="user-card__container">
          {users.slice(0, 10).map((user, i: number) => (
            <UserCard
              key={user?.id}
              firstname={user.personal_information.firstname}
              lastname={user.personal_information.lastname}
              amount={user.education_employment?.loan_repayment?.toLocaleString()}
              status={user?.status}
            />
          ))}
        </div>
      </div>
      <DashboardChart />
    </div>
  );
}
