'use client';

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

export default function SideBar() {
  const { isSidebarOpen } = useSidebar();

  return (
    isSidebarOpen && (
      <nav className="sidebar">
        <div className="sidebar__toggle-button">
          <ImageAtom width={16} height={16} alt="organization icon" src={briefcaseIcon} />
          <Text>{'Switch Organization'}</Text>
          <ImageAtom width={6.75} height={13.21} alt="arrow icon" src={arrowdown} />
        </div>

        <div className="sidebar__menu">
          <ImageAtom width={16} height={16} alt="home icon" src={homeIcon} />
          <Text>{'Dashboard'}</Text>
        </div>

        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'CUSTOMERS'}</Text>
          <div className="sidebar__menu active">
            <ImageAtom width={16} height={12.8} alt="home icon" src={userIcon} />
            <Text>{'Users'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={userGroup} />
            <Text>{'Guarantors'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={loanImg} />
            <Text>{'Loan'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={19} height={16} alt="home icon" src={handshakeImg} />
            <Text>{'Decision Models'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={14.22} alt="home icon" src={savingimg} />
            <Text>{'Savings'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={18} height={22} alt="home icon" src={loanrequestImg} />
            <Text>{'Loan Requests'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={userCheckImg} />
            <Text>{'Whitelist'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={karmaimg} />
            <Text>{'Karma'}</Text>
          </div>
        </div>
        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'BUSINESSES'}</Text>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={briefcaseIcon} />
            <Text>{'Organization'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={18} height={22} alt="home icon" src={loanrequestImg} />
            <Text>{'Loan Products'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={savingImg} />
            <Text>{'Savings Products'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={feecharge} />
            <Text>{'Fees and Charges'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={14.22} alt="home icon" src={transactionImg} />
            <Text>{'Transactions'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={18} alt="home icon" src={galaxyimg} />
            <Text>{'Services'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={usercog} />
            <Text>{'Service Account'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={12.8} alt="home icon" src={statmentimg} />
            <Text>{'Settlements'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={chartimg} />
            <Text>{'Reports'}</Text>
          </div>
        </div>
        <div className="sidebar-menu-container">
          <Text className="sidebar__menu--header">{'SETTINGS'}</Text>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={prefrencImg} />
            <Text>{'Preferences'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={feesimg} />
            <Text>{'Fees and Pricing'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={21.33} alt="home icon" src={auditImg} />
            <Text>{'Audit Logs'}</Text>
          </div>
          <div className="sidebar__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={tireimg} />
            <Text>{'Systems Messages'}</Text>
          </div>
        </div>

        <div className="sidebar-footer">
          <div className="sidebar-footer__menu">
            <ImageAtom width={16} height={16} alt="home icon" src={logoutimg} />
            <Text>{'Logout'}</Text>
          </div>
          <Text className="footer-text">{'v1.2.0'}</Text>
        </div>
      </nav>
    )
  );
}
