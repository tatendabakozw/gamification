import React, { ReactNode } from 'react';
import Navbar from '../components/navigation/Navbar';

interface Props {
  children: ReactNode;
}

function GeneralLayout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex">
        <Navbar />
      </div>
      <div className="bg-zinc-50 w-full flex-1">
        <div className="max-w-7xl mx-auto w-full">{children}</div>
      </div>
    </div>
  );
}

export default GeneralLayout;
