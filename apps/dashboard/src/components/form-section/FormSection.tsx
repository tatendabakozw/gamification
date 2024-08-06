/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ShortAnswer from '../form-inputs.tsx/ShortAnswer';
import DatePicker from '../form-inputs.tsx/DatePicker';
import MultipleChoice, { Option } from '../form-inputs.tsx/MultipeChoice';
import TextArea from '../form-inputs.tsx/TextArea';
import Paragraph from '../form-inputs.tsx/Paragraph';
import { field_types } from '../../utils/data';

interface Props {
  sectionValue: string;
  handleSectionValueChange: any;
  options: Option[];
  handleOptionsChange?: any;
  section_type: string;
}

function FormSection({
  sectionValue,
  handleSectionValueChange,
  options,
  handleOptionsChange,
  section_type,
}: Props) {
  const [type, setType] = useState(field_types[0]);

  const showInputArea = () => {
    switch (section_type) {
      case 'short-answer':
        return (
          <ShortAnswer
            value={sectionValue}
            setValue={handleSectionValueChange}
          />
        );
      case 'date':
        return (
          <DatePicker
            value={sectionValue}
            setValue={handleSectionValueChange}
          />
        );
      case 'multiple-choice':
        return (
          <MultipleChoice
            value={sectionValue}
            setValue={handleSectionValueChange}
            options={options}
            setOptions={handleOptionsChange}
          />
        );
      case 'text-area':
        return (
          <TextArea value={sectionValue} setValue={handleSectionValueChange} />
        );
      case 'paragraph':
        return (
          <Paragraph value={sectionValue} setValue={handleSectionValueChange} />
        );
      default:
        return (
          <ShortAnswer
            value={sectionValue}
            setValue={handleSectionValueChange}
          />
        );
    }
  };
  return (
    <div className="bg-white rounded-xl p-4 space-y-4 max-w-4xl mx-auto w-full">
      <div className="flex flex-row items-center justify-between"></div>
      <div className="w-full gap-4">{showInputArea()}</div>
      <div className="flex self-end w-full gap-4 flex-col"></div>
    </div>
  );
}

export default FormSection;
