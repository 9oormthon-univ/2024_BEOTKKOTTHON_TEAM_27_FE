import PostFooter from '../PostFooter/PostFooter';
import PostTitle from './PostTitle/PostTitle';
import SelectAge from './SelectAge/SelectAge';
import SelectGender from './SelectGender/SelectGender';

export default function Step2() {
  return (
    <>
      <PostTitle />
      <SelectGender />
      <SelectAge />
      <PostFooter />
    </>
  );
}
