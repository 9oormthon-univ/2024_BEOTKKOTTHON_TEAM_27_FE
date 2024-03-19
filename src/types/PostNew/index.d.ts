export interface TitleProps {
  highlightText?: string;
}

export interface ButtonProps {
  width?: string;
  height?: string;
  title: string;
  onClick?: () => void;
}

export interface AgeBoxProps {
  selected: boolean;
}

export interface GenderOptionProps {
  selected: boolean;
}
