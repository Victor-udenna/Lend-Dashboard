import Header from '@/Components/organism/Header/Header';
import SideBar from '@/Components/organism/SideBar/SideBar';
import './DashBoardLayoutStyle.scss';
import React from 'react';

export default function DashboardLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <section className="dashboardlayout">
      <Header />
      <SideBar />
      {children}
    </section>
  );
}
