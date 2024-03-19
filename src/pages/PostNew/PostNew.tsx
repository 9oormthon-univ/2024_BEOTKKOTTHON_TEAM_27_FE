import { styled } from 'styled-components';
// import Step2 from '../../components/PostNew/Step2/Step2';
// import Step1 from '../../components/PostNew/Step1/Step1';
// import Step3 from '../../components/PostNew/Step3/Step3';
// import Step5 from '../../components/PostNew/Step5/Step5';
// import Step4 from '../../components/PostNew/Step4/Step4';
import Step6 from '../../components/PostNew/Step6/Step6';

export default function PostNew() {
  return (
    <PostNewContainer>
      {/* <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 /> */}
      <Step6 />
    </PostNewContainer>
  );
}

const PostNewContainer = styled.section`
  padding: 0 1.5rem;
  width: 100vw;
`;
