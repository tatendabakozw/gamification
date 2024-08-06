import Image from 'next/image';
import React from 'react';
import { FormType, SectionType } from '../../utils/types';
import { PlayIcon } from '@heroicons/react/24/solid';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type Props = {
  item: FormType;
};

const images = [
  '/form-images/date.png',
  '/form-images/multiple-choice.png',
  '/form-images/short-answer.png',
];

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};

function FormItem({ item }: Props) {
  const randomImage = getRandomImage();
  return (
    <div className="col-span-1 max-w-xs border border-zinc-200/50 dark:border-zinc-500/50 flex flex-col rounded-2xl overflow-hidden">
      <div className="bg-white  h-40 w-full p-4 relative border-b border-zinc-200/50">
        <div
          className={`bg-zinc-100 relative h-36 w-full overflow-hidden rounded-t-lg`}
        >
          <Image
            src={randomImage}
            className={'object-cover  rounded-t-lg '}
            alt="expense tracker"
            fill
            loading="lazy"
            quality={75}
          />
        </div>
        <Link
          href={`/forms/${item.id}`}
          className="bg-zinc-950 rounded-full p-2 absolute text-white top-5 right-5"
        >
          <PlayIcon height={12} width={12} />
        </Link>
      </div>
      <div className="flex flex-col bg-white space-y-2 p-4">
        <div className="flex flex-row items-start w-full">
          <p className="text-sm flex-1 font-bold text-zinc-700 dark:text-zinc-100">
            {item.form.name}
          </p>
          <button className="border border-zinc-300/50 rounded-full p-1 text-zinc-950 top-5 right-5">
            <EllipsisVerticalIcon height={16} width={16} />
          </button>
        </div>
        <p className="text-zinc-500 dark:text-zinc-300 text-xs">
          {5} (est) to complete
        </p>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-300 line-clamp-3">
          {item.form.description}
        </p>
        <div className="flex-1"></div>
        <div className="flex flex-row flex-wrap">
          {item.form.sections.map((item: SectionType) => (
            <span
              className="bg-zinc-200 text-xs font-medium mb-2 mr-2 rounded px-2 py-1 dark:bg-zinc-800 dark:text-white text-zinc-950"
              key={item.id}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormItem;
