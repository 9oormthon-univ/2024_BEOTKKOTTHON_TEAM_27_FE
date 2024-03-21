import { styled } from 'styled-components';
import { useFunnel } from '../../hooks/useFunnel';
import Step1 from '../../components/PostNew/Step1/Step1';
import { ONBOARDING_FORM_STEP } from '../../core/PostNew/Onboarding';
import Step2 from '../../components/PostNew/Step2/Step2';
import Step3 from '../../components/PostNew/Step3/Step3';
import Step4 from '../../components/PostNew/Step4/Step4';
import Step5 from '../../components/PostNew/Step5/Step5';
import Step6 from '../../components/PostNew/Step6/Step6';
import ProcessBar from '../../components/common/ProcessBar/ProcessBar';
import PostFooter from '../../components/PostNew/PostFooter/PostFooter';
import { useNavigate } from 'react-router-dom';
import { useOnboardingContext } from '../../context/PostNew/PostNewContext';

export default function PostNew() {
  const navigate = useNavigate();
  const { Funnel, setStep } = useFunnel(ONBOARDING_FORM_STEP, ONBOARDING_FORM_STEP[0]);

  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  // [이전 버튼]
  const onClickBackBtn = (stepNum: number) => {
    const stepIndex = stepNum - 1;
    if (stepIndex === 0) {
      navigate('/');
    } else {
      setStep(() => ONBOARDING_FORM_STEP[stepIndex - 1]);
      updatePostInfo({
        postingChannel: onboardingInfo.postingChannel,
        promotionType: onboardingInfo.promotionType,
        promotionSubject: onboardingInfo.promotionSubject,
        promotionContent: onboardingInfo.promotionContent,
        fileName: onboardingInfo.fileName,
      });
    }
  };

  return (
    <Funnel>
      <Funnel.Step name='POSTING_CHANNEL'>
        <PostNewContainer>
          <ProcessBar currentStep={1} stepCount={6} />
          <Step1 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(1)}
            setStep={() => setStep(() => 'AGE_GENDER')}
          />
        </PostNewContainer>
      </Funnel.Step>

      <Funnel.Step name='AGE_GENDER'>
        <PostNewContainer>
          <ProcessBar currentStep={2} stepCount={6} />
          <Step2 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(2)}
            setStep={() => setStep(() => 'TYPE')}
          />
        </PostNewContainer>
      </Funnel.Step>

      <Funnel.Step name='TYPE'>
        <PostNewContainer>
          <ProcessBar currentStep={3} stepCount={6} />
          <Step3 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(3)}
            setStep={() => setStep(() => 'POSTING_SUBJECT')}
          />
        </PostNewContainer>
      </Funnel.Step>

      <Funnel.Step name='POSTING_SUBJECT'>
        <PostNewContainer>
          <ProcessBar currentStep={4} stepCount={6} />
          <Step4 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(4)}
            setStep={() => setStep(() => 'POSTING_CONTENT')}
          />
        </PostNewContainer>
      </Funnel.Step>

      <Funnel.Step name='POSTING_CONTENT'>
        <PostNewContainer>
          <ProcessBar currentStep={5} stepCount={6} />
          <Step5 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(5)}
            setStep={() => setStep(() => 'POSTING_IMAGE')}
          />
        </PostNewContainer>
      </Funnel.Step>

      <Funnel.Step name='POSTING_IMAGE'>
        <PostNewContainer>
          <ProcessBar currentStep={6} stepCount={6} />
          <Step6 />
          <PostFooter
            onClickBackBtn={() => onClickBackBtn(6)}
            setStep={() => setStep(() => 'POSTING_IMAGE')}
          />
        </PostNewContainer>
      </Funnel.Step>
    </Funnel>
  );
}

const PostNewContainer = styled.section`
  padding: 0 1.5rem;
  width: 100vw;
`;
