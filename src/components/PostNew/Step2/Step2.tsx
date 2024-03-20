import PostFooter from '../PostFooter/PostFooter';
import PostTitle from './PostTitle/PostTitle';
import SelectAge from './SelectAge/SelectAge';
import SelectGender from './SelectGender/SelectGender';
interface NameInputProps {
  onNext: VoidFunction;
}

export default function Step2(props: NameInputProps) {
  const { onNext } = props;
  return (
    <>
      <PostTitle />
      <SelectGender />
      <SelectAge />
      <PostFooter onNext={onNext} />
    </>
  );
}
