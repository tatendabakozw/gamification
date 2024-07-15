import React from 'react';
import GeneralLayout from '../../layout/GeneralLayout';
import Search from '../../components/search/Search';
import SideDrawer from '../../components/drawers/SideDrawer';

function Gigs() {
  return (
    <GeneralLayout>
      <div className="flex flex-col  w-full space-y-6 py-16 px-4 ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-start font-bold heading-text text-3xl ">
              Manage Gigs
            </p>
            <p className="text-start main-text text-sm text-zinc-500 max-w-2xl">
              Manage all gigs on the pllatform
            </p>
          </div>
          <SideDrawer />
        </div>
        <Search />
      </div>
    </GeneralLayout>
  );
}

export default Gigs;
