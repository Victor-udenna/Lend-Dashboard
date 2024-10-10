import { SidebarProvider } from '@/Providers/context';
import Header from '@/Components/organism/Header/Header';
import SideBar from '@/Components/organism/SideBar/SideBar';
import './DashBoardLayoutStyle.scss';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="dashboard-layout">
        <Header />
        <SideBar />
        <section className='dashboard-content'>{children}</section>
      </div>
    </SidebarProvider>
  );
}
