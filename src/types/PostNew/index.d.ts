export interface TitleProps {
  highlightText?: string;
}

export interface ButtonProps {
  width?: string;
  height?: string;
  title: string;
  enable?: boolean;
  onClick?: () => void;
}

export interface AgeBoxProps {
  selected: boolean;
}

export interface GenderOptionProps {
  selected: boolean;
}

export type PostInfo = {
  userId: number | undefined;
  storeId: number | undefined;
  postingType: string;
  postingChannel: string | null;
  promotionType: string;
  promotionSubject: string;
  promotionContent: string;
  fileName: string | null;
  targetGender: Array;
  targetAge: Array;
};

export interface ImageUploadRequestType {
  file_extension: string;
  file_content: string;
}

export interface PostInfoContext {
  onboardingInfo: PostInfo;
  updatePostInfo: (newInfo: Partial<PostInfo>) => void;
}
