import { SidebarProvider } from '@/Providers/context';
import Header from '@/Components/organism/Header/Header';
import SideBar from '@/Components/organism/SideBar/SideBar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <div className="dashboardlayout">
        <Header />
        <SideBar />
        {children}
      </div>
    </SidebarProvider>
  );
}
