import React from 'react';
import GeneralLayout from '../../layout/GeneralLayout';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import Search from '../../components/search/Search';

function Gigs() {
  const router = useRouter();
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
          <button
            onClick={() => router.push('/user/add')}
            className="add-new bg-zinc-900  text-sm text-white  flex flex-row items-center space-x-4 rounded-lg font-medium p-2"
          >
            <PlusCircleIcon height={24} width={24} />
            <p>Add New</p>
          </button>
        </div>
        <Search />
      </div>
    </GeneralLayout>
  );
}

export default Gigs;
