import { styled } from 'styled-components';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import ButtonPrev from '../../components/common/Button/ButtonPrev/ButtonPrev';

import PostTitle from '../../components/PostNew/PostTitle/PostTitle';
import SelectGender from '../../components/PostNew/SelectGender/SelectGender';
import SelectAge from '../../components/PostNew/SelectAge/SelectAge';

export default function PostNew() {
  return (
    <PostNewContainer>
      <PostTitle />
      <SelectGender/>
      <SelectAge/>
      <ButtonFill title='다음' width='11.5rem' />
      <ButtonPrev title='로그인' width='20rem' />
    </PostNewContainer>
  );
}

const PostNewContainer = styled.section`
  padding: 0 1.5rem;
`;
