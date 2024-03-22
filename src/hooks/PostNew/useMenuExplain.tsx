import { useOnboardingContext } from '../../context/PostNew/PostNewContext';

const useMenuExplain = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    updatePostInfo({ promotionContent: inputValue });
  };

  const handleBtnClick = () => {
    updatePostInfo({ promotionContent: '' });
  };

  const isActivated = onboardingInfo.promotionContent.length > 0;

  return {
    onboardingInfo,
    isActivated,
    handleInputChange,
    handleBtnClick,
  };
};

export default useMenuExplain;
