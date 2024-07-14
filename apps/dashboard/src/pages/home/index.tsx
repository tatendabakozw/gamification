import {
  BanknotesIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import GeneralLayout from '../../layout/GeneralLayout';
import DashboarItem from '../../components/dashboard-item/DashboardItem';
import Clock from '../../components/time-components/Clock';
import Calendar from '../../components/time-components/Calender';
import Search from '../../components/search/Search';

const Overview = () => {
  const router = useRouter();

  const projects = [
    {
      name: 'Users',
      _id: 'users',
      link: 'https://example.digiforge.app',
      createdAt: '3',
      branch: 'available',
      status: 'success',
      Icon: UserGroupIcon,
    },
    {
      name: 'Gigs',
      _id: 'gigs',
      link: 'https://daypitch.com',
      createdAt: '3',
      branch: 'available',
      status: 'success',
      Icon: BanknotesIcon,
    },
  ];

  return (
    <GeneralLayout>
      <div className="max-w-7xl px-4 py-16 w-full mx-auto space-y-8 ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-start font-bold heading-text text-3xl ">
              Dashboard Overview
            </p>
            <p className="text-start main-text text-sm text-zinc-500 max-w-2xl">
              Choose how you like to manage your inventory. Start by adding
              items
            </p>
          </div>
          <button
            onClick={() => router.push('/inventory/create')}
            className="add-new bg-zinc-900 dark:bg-white text-sm text-white dark:text-zinc-900 flex flex-row items-center space-x-4 rounded-lg font-medium p-2"
          >
            <PlusCircleIcon height={24} width={24} />
            <p>Add New</p>
          </button>
        </div>
        {/* search and filter */}
        <Search />
        {/* project items */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="md:col-span-2 col-span-1 flex flex-col space-y-4 ">
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {projects.map((item) => (
                <DashboarItem
                  Icon={item.Icon}
                  link={item.link}
                  _id={item._id}
                  key={item._id}
                  name={item.name}
                  createdAt={item.createdAt}
                  branch={item.branch}
                  status={item.status}
                />
              ))}
              <Clock />
            </div>
            {/* producgts table */}
          </div>
          <div className="col-span-1">
            <Calendar />{' '}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Overview;
