import { FormType } from './types';

export const field_types = [
  { name: 'Short Answer', _id: 'short-answer' },
  { name: 'Test Area', _id: 'text-area' },
  { name: 'Paragraph', _id: 'paragraph' },
  { name: 'Mutiple choice', _id: 'multiple-choice' },
  // { name: "File Upload", _id: "file-upload" },
  { name: 'Date', _id: 'date' },
];

export const data = {
  nav_options: [
    { name: 'Home', _id: 'home', location: '/home' },
    { name: 'Gigs', _id: 'gigs', location: '/gigs' },
    { name: 'Users', _id: 'users', location: '/users' },
    { name: 'Forms', _id: 'forms', location: '/forms' },
  ],
};

export const fake_forms: FormType[] = [
  {
    id: 'asj87',
    form: {
      name: 'New form from',
      description:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi corporis earum omnis laudantium aliquam ex dolores inventore, aperiam cupiditate! Quae nulla distinctio atque cupiditate ea labore voluptatibus molestias velit soluta.',
      sections: [
        {
          id: 1,
          options: [
            { name: 'Option 1', _id: 'option1' },
            { name: 'Option 2', _id: 'option2' },
          ],
          type: { name: 'Multiple Choice', _id: 'multiple_choice' },
          value: 'Sample Value',
        },
      ],
    },
  },
];
