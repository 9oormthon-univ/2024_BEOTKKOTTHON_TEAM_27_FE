import { useOnboardingContext } from '../../context/PostNew/PonstNewContext';

const useNameInput = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    // 아이폰 특수문자 제거
    const hasIphoneSpecialCharacter = /[\ud800-\udfff]/.test(inputValue);

    if (hasIphoneSpecialCharacter) {
      inputValue = inputValue.replace(/[\ud800-\udfff]/g, '');
      updatePostInfo({ promotionSubject: inputValue });
    } else {
      updatePostInfo({ promotionSubject: inputValue });
    }
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

export default useNameInput;
