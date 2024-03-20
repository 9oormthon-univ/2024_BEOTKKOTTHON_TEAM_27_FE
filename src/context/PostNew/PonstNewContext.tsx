import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PostInfo } from '../../types/PostNew';

interface OnboardingInfoContext {
  onboardingInfo: PostInfo;
  updatePostInfo: (newInfo: Partial<PostInfo>) => void;
  updatePostingChannel: (sns: string | null) => void; // PostingChannel을 업데이트하는 함수 추가
}

const initialOnboardingInfo: PostInfo = {
  userId: 0,
  storeId: 0,
  postingType: '',
  postingChannel: '',
  promotionType: '',
  promotionSubject: '',
  promotionContent: '',
  fileName: '',
  targetGender: [],
  targetAge: [],
};

const OnboardingContext = createContext<OnboardingInfoContext>({
  onboardingInfo: initialOnboardingInfo,
  updatePostInfo: () => {},
  updatePostingChannel: () => {}, // 초기값 설정
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<PostInfo>(initialOnboardingInfo);

  const updatePostInfo = (newInfo: Partial<PostInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

   const updatePostingChannel = (sns: string | null) => {
     setOnboardingInfo((prev) => ({ ...prev, postingChannel: sns }));
   };

  /**@todo 전체 값 확인용 useEffect */
  useEffect(() => {
    console.log('전체 값 확인:', onboardingInfo);
  }, [onboardingInfo]);

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updatePostInfo,
      updatePostingChannel,
    }),
    [onboardingInfo],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
