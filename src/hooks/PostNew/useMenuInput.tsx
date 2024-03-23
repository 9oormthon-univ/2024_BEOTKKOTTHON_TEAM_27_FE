import { useOnboardingContext } from '../../context/PostNew/PostNewContext';

const useMenuInput = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    updatePostInfo({ promotionSubject: inputValue });
  };

  const handleBtnClick = () => {
    updatePostInfo({ promotionSubject: '' });
  };

  const isActivated = onboardingInfo.promotionSubject.length > 0;

  return {
    onboardingInfo,
    isActivated,
    handleInputChange,
    handleBtnClick,
  };
};

export default useMenuInput;
