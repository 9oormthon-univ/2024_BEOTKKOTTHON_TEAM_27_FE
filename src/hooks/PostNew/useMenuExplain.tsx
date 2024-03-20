import { useOnboardingContext } from '../../context/PostNew/PonstNewContext';

const useMenuExplain = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;
    updatePostInfo({ promotionContent: inputValue });
  };

  const handleBtnClick = () => {
    updatePostInfo({ promotionContent: '' });
  };

  return {
    onboardingInfo,
    handleInputChange,
    handleBtnClick,
  };
};

export default useMenuExplain;
