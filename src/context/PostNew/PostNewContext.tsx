import { PropsWithChildren, createContext, useContext,  useMemo, useState } from 'react';
import { PostInfo, PostInfoContext } from '../../types/PostNew';

// 1.
// [포스트 생성] 관리해야하는 상태 값 초기화
export const initialOnboardingInfo: PostInfo = {
  userId: 0,
  storeId: 0,
  postingType: 'Text',
  postingChannel: '',
  promotionType: '',
  promotionSubject: '',
  promotionContent: '',
  fileName: '',
  targetGender: [],
  targetAge: [],
};

// 2.
// [포스트 생성] Context api 생성
const OnboardingContext = createContext<PostInfoContext>({
  onboardingInfo: initialOnboardingInfo,
  updatePostInfo: () => {},
});

// 3.
// 커스텀 훅 분리
export const useOnboardingContext = () => useContext(OnboardingContext);

// 4.
// provider 컴포넌트 생성
export const OnboardingProvider = ({ children }: PropsWithChildren) => {
  const [onboardingInfo, setOnboardingInfo] = useState<PostInfo>(initialOnboardingInfo);

  // 4-1.
  // onboardingInfo 객체를 업데이트하는 함수
  // 부분적인 정보를 업데이트 가능 -> Partial 사용
  const updatePostInfo = (newInfo: Partial<PostInfo>) => {
    setOnboardingInfo((prev) => ({ ...prev, ...newInfo }));
  };

  // 4-2.
  // OnboardingContext.Provider의 value 속성으로 제공
  // 하위 컴포넌트에서 컨텍스트를 통해 onboardingInfo 상태와 updatePostInfo 함수에 접근
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
