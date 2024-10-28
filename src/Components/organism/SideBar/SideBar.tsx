'use client';

import React, { useState, useEffect } from 'react';
import ImageAtom from '@/Components/atom/Image';
import './SideBarStyle.scss';
import briefcaseIcon from '@/assets/images/briefcase 1.svg';
import arrowdown from '@/assets/images/arrow-down.svg';
import Text from '@/Components/atom/Text';
import homeIcon from '@/assets/images/home.svg';
import userIcon from '@/assets/images/user-friends.svg';
import userGroup from '@/assets/images/users-group.svg';
import loanImg from '@/assets/images/loan.svg';
import handshakeImg from '@/assets/images/handshake-regular.svg';
import savingimg from '@/assets/images/piggy-bank.svg';
import loanrequestImg from '@/assets/images/loanrequest.svg';
import userCheckImg from '@/assets/images/user-check 1.svg';
import karmaimg from '@/assets/images/user-times.svg';
import savingImg from '@/assets/images/saving-product.svg';
import feecharge from '@/assets/images/fee-charge.svg';
import transactionImg from '@/assets/images/transaction.svg';
import galaxyimg from '@/assets/images/galaxy 1.svg';
import usercog from '@/assets/images/user-cog 1.svg';
import statmentimg from '@/assets/images/scroll 1.svg';
import chartimg from '@/assets/images/chart-bar 2.svg';
import prefrencImg from '@/assets/images/sliders-h 1.svg';
import feesimg from '@/assets/images/badge-percent 1.svg';
import auditImg from '@/assets/images/clipboard-list 1.svg';
import tireimg from '@/assets/images/tire 1.svg';
import logoutimg from '@/assets/images/sign-out 1.svg';
import { useSidebar } from '@/Providers/context';
import { useRouter, usePathname } from 'next/navigation';

export default function SideBar() {
  const { isSidebarOpen } = useSidebar();
  const router = useRouter();
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(pathname);

  const handleMenuClick = (path: string) => {
    setActiveMenu(path);
    router.push(path);
  };

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  return (
    isSidebarOpen && (
      <nav className="sidebar">
        <div className="sidebar__toggle-button">
          <ImageAtom width={16} height={16} alt="organization icon" src={briefcaseIcon} />
          <Text>{'Switch Organization'}</Text>
          <ImageAtom width={6.75} height={13.21} alt="arrow icon" src={arrowdown} />
        </div>

        <div
          role="button"
          tabIndex={1}
          className={`sidebar__menu ${activeMenu === '/dashboard' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/dashboard')}
        >
          <ImageAtom width={16} height={16} alt="home icon" src={homeIcon} />
          <Text>{'Dashboard'}</Text>
        </div>
        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'CUSTOMERS'}</Text>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/users' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/users')}
          >
            <ImageAtom width={16} height={12.8} alt="users icon" src={userIcon} />
            <Text>{'Users'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/guarantors' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/guarantors')}
          >
            <ImageAtom width={16} height={12.8} alt="guarantors icon" src={userGroup} />
            <Text>{'Guarantors'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/loan' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/loan')}
          >
            <ImageAtom width={16} height={12.8} alt="loan icon" src={loanImg} />
            <Text>{'Loans'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/decision-models' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/decision-models')}
          >
            <ImageAtom width={16} height={12.8} alt="handshake icon" src={handshakeImg} />
            <Text>{'Decision Models'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/savings' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/savings')}
          >
            <ImageAtom width={16} height={12.8} alt="savings icon" src={savingimg} />
            <Text>{'Savings'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/loan-requests' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/loan-requests')}
          >
            <ImageAtom width={16} height={12.8} alt="loan request icon" src={loanrequestImg} />
            <Text>{'Loan Requests'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/whitelist' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/whitelist')}
          >
            <ImageAtom width={16} height={12.8} alt="user check icon" src={userCheckImg} />
            <Text>{'Whitelist'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/karma' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/karma')}
          >
            <ImageAtom width={16} height={12.8} alt="karma icon" src={karmaimg} />
            <Text>{'Karma'}</Text>
          </div>
        </div>
        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'BUSINESSES'}</Text>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/organization' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/organization')}
          >
            <ImageAtom width={16} height={12.8} alt="organization icon" src={briefcaseIcon} />
            <Text>{'Organization'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/loan-products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/loan-products')}
          >
            <ImageAtom width={16} height={12.8} alt="loan products icon" src={loanrequestImg} />
            <Text>{'Loan Products'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/savings-products' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/savings-products')}
          >
            <ImageAtom width={16} height={12.8} alt="savings products icon" src={savingImg} />
            <Text>{'Savings Products'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/fees-and-charges' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/fees-and-charges')}
          >
            <ImageAtom width={16} height={12.8} alt="fees and charges icon" src={feecharge} />
            <Text>{'Fees and Charges'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/transactions' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/transactions')}
          >
            <ImageAtom width={16} height={12.8} alt="transactions icon" src={transactionImg} />
            <Text>{'Transactions'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/services' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/services')}
          >
            <ImageAtom width={16} height={12.8} alt="services icon" src={galaxyimg} />
            <Text>{'Services'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/service-account' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/service-account')}
          >
            <ImageAtom width={16} height={12.8} alt="service account icon" src={usercog} />
            <Text>{'Service Account'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/settlements' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/settlements')}
          >
            <ImageAtom width={16} height={12.8} alt="settlements icon" src={statmentimg} />
            <Text>{'Settlements'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/reports' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/reports')}
          >
            <ImageAtom width={16} height={12.8} alt="reports icon" src={chartimg} />
            <Text>{'Reports'}</Text>
          </div>
        </div>
        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'SETTINGS'}</Text>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/preferences' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/preferences')}
          >
            <ImageAtom width={16} height={12.8} alt="preferences icon" src={prefrencImg} />
            <Text>{'Preferences'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/fees-and-pricing' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/fees-and-pricing')}
          >
            <ImageAtom width={16} height={12.8} alt="fees and pricing icon" src={feesimg} />
            <Text>{'Fees and Pricing'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/audit-logs' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/audit-logs')}
          >
            <ImageAtom width={16} height={12.8} alt="audit logs icon" src={auditImg} />
            <Text>{'Audit Logs'}</Text>
          </div>

          <div
            className={`sidebar__menu ${activeMenu === '/dashboard/system-messages' ? 'active' : ''}`}
            onClick={() => handleMenuClick('/dashboard/system-messages')}
          >
            <ImageAtom width={16} height={12.8} alt="system messages icon" src={tireimg} />
            <Text>{'System Messages'}</Text>
          </div>
        </div>
        <div
          className={`sidebar__menu ${activeMenu === '/logout' ? 'active' : ''}`}
          onClick={() => handleMenuClick('/logout')}
        >
          <ImageAtom width={16} height={12.8} alt="logout icon" src={logoutimg} />
          <Text>{'Logout'}</Text>
        </div>
      </nav>
    )
  );
}
