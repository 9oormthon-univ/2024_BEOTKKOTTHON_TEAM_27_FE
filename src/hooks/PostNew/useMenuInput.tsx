import { useOnboardingContext } from '../../context/PostNew/PonstNewContext';

const useMenuInput = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    updatePostInfo({ promotionSubject: inputValue });
  };

  const handleBtnClick = () => {
    updatePostInfo({ promotionSubject: '' });
  };

  return {
    onboardingInfo,
    handleInputChange,
    handleBtnClick,
  };
};

export default useMenuInput;
