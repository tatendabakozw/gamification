import React from 'react';
import GeneralLayout from '../../../layout/GeneralLayout';
import {
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PencilIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import useDocument from '../../../hooks/useDocument';

const SingleForm = () => {
  const router = useRouter();
  const { form_id } = router.query;

  const { document, loading, error } = useDocument({
    collectionName: 'forms',
    id: form_id as string,
  });

  console.log(document);
  return (
    <GeneralLayout>
      <div className="max-w-7xl px-4 py-16 w-full mx-auto space-y-8 ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-start font-bold heading-text text-3xl">
              {loading ? 'Loading...' : document?.name}
            </p>
            <p className="text-start main-text text-sm text-zinc-500 max-w-lg">
              {loading ? 'Loading...' : document?.description}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button className="flex flex-row items-center bg-zinc-950 p-2 rounded-full capitalize font-medium text-white">
              <DevicePhoneMobileIcon height={24} width={24} />
            </button>
            <button className="bg-zinc-950 rounded-full p-2 text-white">
              <GlobeAltIcon height={24} width={24} />
            </button>
            <div className="flex flex-row items-center bg-zinc-950 p-2 rounded-full capitalize font-medium text-white">
              <PencilIcon height={24} width={24} />
            </div>
          </div>
        </div>
        {/* search and filter */}
      </div>
    </GeneralLayout>
  );
};

export default SingleForm;
