import Image from 'next/image';
import React from 'react';

type Props = {
  image: any;
  name: string;
  duration: string;
  description: string;
  bg_color: string;
  cover?: boolean;
  tech_used: any;
};

function FormItem({
  image,
  name,
  duration,
  description,
  bg_color,
  cover,
  tech_used,
}: Props) {
  return (
    <div className="col-span-1 max-w-xs border border-zinc-200/50 dark:border-zinc-500/50 flex flex-col rounded-xl overflow-hidden">
      <div className="bg-white  h-40 w-full p-4  border-b border-zinc-200/50">
        <div
          className={`bg-zinc-100 h-36 relative w-full overflow-hidden rounded-t-lg`}
        >
          <Image
            src={image}
            className={`${
              cover ? 'object-cover ' : 'object-contain '
            } rounded-t-lg `}
            alt="expense tracker"
            fill
            loading="lazy"
            quality={75}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 p-4">
        <p className="text-sm font-bold text-zinc-700 dark:text-zinc-100">
          {name}
        </p>
        <p className="text-zinc-500 dark:text-zinc-300 text-xs">
          {duration} (est) to complete
        </p>
        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-300 line-clamp-3">
          {description}
        </p>
        <div className="flex-1"></div>
        <div className="flex flex-row flex-wrap">
          {tech_used.map((item: any) => (
            <span
              className="bg-zinc-200 text-xs font-medium mb-2 mr-2 rounded px-2 py-1 dark:bg-zinc-800 dark:text-white text-zinc-950"
              key={item._id}
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FormItem;
