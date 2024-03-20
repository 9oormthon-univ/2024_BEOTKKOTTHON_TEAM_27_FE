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

export type OnboardingInfo = {
  sns: string;
  age: Array;
  gender: Array;
  type: string;
  subject: string;
  content: string;
  imageUrl?: string;
};
