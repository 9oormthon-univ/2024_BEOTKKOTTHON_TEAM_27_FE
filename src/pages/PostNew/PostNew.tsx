import { styled } from 'styled-components';
// import Step2 from '../../components/PostNew/Step2/Step2';
// import Step1 from '../../components/PostNew/Step1/Step1';
import Step3 from '../../components/PostNew/Step3/Step3';

export default function PostNew() {
  return (
    <PostNewContainer>
      {/* <Step1 />
      <Step2 /> */}
      <Step3 />
    </PostNewContainer>
  );
}

const PostNewContainer = styled.section`
  padding: 0 1.5rem;
  width: 100vw;
`;
