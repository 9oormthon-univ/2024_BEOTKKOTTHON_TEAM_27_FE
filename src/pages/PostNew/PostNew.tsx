import { styled } from 'styled-components';
import PostTitle from '../../components/PostNew/PostTitle/PostTitle';
import SelectGender from '../../components/PostNew/SelectGender/SelectGender';
import SelectAge from '../../components/PostNew/SelectAge/SelectAge';
import PostFooter from '../../components/PostNew/PostFooter/PostFooter';

export default function PostNew() {
  return (
    <PostNewContainer>
      <PostTitle />
      <SelectGender/>
      <SelectAge/>
      <PostFooter/>
      
    </PostNewContainer>
  );
}

const PostNewContainer = styled.section`
  padding: 0 1.5rem;
`;
