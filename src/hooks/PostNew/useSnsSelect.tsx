import { useOnboardingContext } from '../../context/PostNew/PonstNewContext';

const useSnsSelect = () => {
  const { onboardingInfo, updateOnboardingInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    updateOnboardingInfo({ sns: inputValue });
  };

  const handleBtnClick = () => {
    updateOnboardingInfo({ sns: '' });
  };

  const isActivated = onboardingInfo.sns.length > 0;

  return {
    onboardingInfo,
    handleInputChange,
    handleBtnClick,
    isActivated,
  };
};

export default useSnsSelect;
