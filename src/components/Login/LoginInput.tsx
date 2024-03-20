import styled from 'styled-components';

interface LoginInputProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}
export default function LoginInput({ value, placeholder, onChange }: LoginInputProps) {
  return (
    <Input
      type='text'
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

const Input = styled.input`
  width: 100%;
  height: 2.8125rem;

  background: ${({ theme }) => theme.colors.light_gray};
  border-radius: 8px;
  border: none;
  padding: 0.6rem 1.25rem;
  margin: 0.38rem 0;

  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.subTitle};

  &::placeholder {
    color: ${({ theme }) => theme.colors.deep_gray};
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
