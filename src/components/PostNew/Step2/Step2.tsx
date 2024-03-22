import { useEffect } from 'react';
import { StepProps } from '../Step1/Step1';
import PostTitle from './PostTitle/PostTitle';
import SelectAge from './SelectAge/SelectAge';
import SelectGender from './SelectGender/SelectGender';

export default function Step2({ setIsValidate }: StepProps) {
  useEffect(() => {
    setIsValidate(false);
  }, []);
  return (
    <>
      <PostTitle />
      <SelectGender />
      <SelectAge setIsValidate={setIsValidate} />
    </>
  );
}
