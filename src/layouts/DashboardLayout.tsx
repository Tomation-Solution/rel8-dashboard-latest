import React, { ReactNode } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface DashboardLayoutInterfaceProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutInterfaceProps> = ({
  children,
}) => {
  const [isMobileSidebarOpen,setIsMobileSidebarOpen] = React.useState<boolean>(false)
  return (
    <div className="font-poppins h-screen relative ">
      <Navbar setIsMobileSidebarOpen={setIsMobileSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen} />
      <div className="top-[400px] h-full text-white pt-[60px] bg-[#fbfbfb]">
        <Sidebar setIsMobileSidebarOpen={setIsMobileSidebarOpen} isMobileSidebarOpen={isMobileSidebarOpen} />
        <div className="lg:max-w-[calc(100%_-_256px)]  px-6 py-5 ml-auto overflow-y-auto text-black z-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
