import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import GeneralLayout from '../../layout/GeneralLayout';
import { db } from '../../lib/firebase';
import Search from '../../components/search/Search';
import { ArrowPathIcon, LinkIcon, PlusIcon } from '@heroicons/react/24/outline';
import FormItem from '../../components/form-item/FormItem';

function Forms() {
  const [forms, setForms] = useState<any>([]); // Add state for forms

  const getAllForms = async () => {
    const snapshot = await getDocs(collection(db, 'forms'));
    const fetchedForms = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setForms(fetchedForms);
  };

  useEffect(() => {
    getAllForms();
  }, []);

  console.log(forms);

  const fake_forms = [
    {
      name: 'New form from',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi corporis earum omnis laudantium aliquam ex dolores inventore, aperiam cupiditate! Quae nulla distinctio atque cupiditate ea labore voluptatibus molestias velit soluta.',
      image: '/form-images/multiple-choice.png',
      duration: '5',
      tech_used: [
        { name: 'date picker', _id: 'ashj23' },
        { name: 'multiple choice', _id: '8923jkj' },
      ],
      bg_color: 'bg-red-200',
      cover: true,
      _id: 'asj87',
    },
  ];

  const generateFormsLink = () => {
    const url = `${process.env.NEXT_PUBLIC_FORMS_URL}/?type=shared&id=190911`;
    console.log(url);
    window.open(url, '_blank');
  };

  return (
    <GeneralLayout>
      <div className="max-w-7xl px-4 py-16 w-full mx-auto space-y-8 ">
        <div className="flex flex-row items-start justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-start font-bold heading-text text-3xl ">
              Manage Forms
            </p>
            <p className="text-start main-text text-sm text-zinc-500 max-w-2xl">
              Create forms or create forms link
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <div className="flex flex-row items-center bg-zinc-950 p-2 rounded-full capitalize font-medium text-white">
              <PlusIcon height={24} width={24} />
            </div>
            <button
              onClick={generateFormsLink}
              className="bg-zinc-950 rounded-full p-2 text-white"
            >
              <LinkIcon height={24} width={24} />
            </button>
            <div className="flex flex-row items-center bg-zinc-950 p-2 rounded-full capitalize font-medium text-white">
              <ArrowPathIcon height={24} width={24} />
            </div>
          </div>
        </div>
        {/* search and filter */}
        <Search />
        <div className="max-w-7xl w-full mx-auto">
          <div className=" flex-row flex-wrap grid md:grid-cols-2 grid-cols-1 gap-8 py-8">
            {fake_forms.map((item) => (
              <FormItem
                tech_used={item.tech_used}
                key={item._id}
                cover={item.cover}
                bg_color={item.bg_color}
                description={item.description}
                duration={item.duration}
                name={item.name}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}

export default Forms;
