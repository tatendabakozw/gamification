import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@gamification/shared';
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import CustomButton from '../buttons/CustomButton';
import { useState } from 'react';

function SideDrawer() {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [desc, setDesc] = useState('');
  const [category, setCategory] = useState('');
  const [difficult, setDifficult] = useState('');

  const createNewGig = async () => {
    try {
      setLoading(true);
      //create gig
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <button className="add-new bg-zinc-900  text-sm text-white  flex flex-row items-center space-x-4 rounded-lg font-medium p-2">
          <PlusCircleIcon height={24} width={24} />
          <p>Add New</p>
        </button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Add a new gig</SheetTitle>
          <SheetDescription>
            Fill information below to add a new gig
          </SheetDescription>
        </SheetHeader>
        <SheetDescription>
          <div className="flex flex-col space-y-6 py-6">
            <input
              type="text"
              className="bg-zinc-50 p-2 rounded-xl border border-zinc-200/50"
              placeholder="Enter gig name"
            />
            <input
              type="number"
              className="bg-zinc-50 p-2 rounded-xl border border-zinc-200/50"
              placeholder="price"
            />
            <input
              type="text"
              className="bg-zinc-50 p-2 rounded-xl border border-zinc-200/50"
              placeholder="Difficult"
            />
            <textarea
              rows={5}
              className="bg-zinc-50 p-2 rounded-xl border border-zinc-200/50"
              placeholder="Description"
            />
            <input
              type="text"
              className="bg-zinc-50 p-2 rounded-xl border border-zinc-200/50"
              placeholder="Category"
            />
            <div className="flex items-center justify-center w-full">
              <label
                htmlFor="dropzone-file"
                className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div className="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-semibold">Click to upload</span> or
                    drag and drop
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" className="hidden" />
              </label>
            </div>

            <CustomButton
              loading={loading}
              onClick={createNewGig}
              text="Add New Gig"
            />
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}

export default SideDrawer;
