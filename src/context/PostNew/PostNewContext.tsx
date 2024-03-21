import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useState } from 'react';
import { PostInfo } from '../../types/PostNew';

interface PostInfoContext {
  onboardingInfo: PostInfo;
  updatePostInfo: (newInfo: Partial<PostInfo>) => void;
}

export const initialOnboardingInfo: PostInfo = {
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

const OnboardingContext = createContext<PostInfoContext>({
  onboardingInfo: initialOnboardingInfo,
  updatePostInfo: () => {},
});

export const useOnboardingContext = () => useContext(OnboardingContext);

export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<PostInfo>(initialOnboardingInfo);

  const updatePostInfo = (newInfo: Partial<PostInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  /**@todo 전체 값 확인용 useEffect */
  useEffect(() => {
    console.log('전체 값 확인:', onboardingInfo);
  }, [onboardingInfo]);

  const OnboardingInfoContextValue = useMemo(
    () => ({
      onboardingInfo,
      updatePostInfo,
    }),
    [onboardingInfo],
  );

  return (
    <OnboardingContext.Provider value={OnboardingInfoContextValue}>
      {children}
    </OnboardingContext.Provider>
  );
};
