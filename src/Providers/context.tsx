'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SidebarContextProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>{children}</SidebarContext.Provider>;
};

export const useSidebar = (): SidebarContextProps => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider');
  }
  return context;
};
