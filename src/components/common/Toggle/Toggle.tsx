import styled from 'styled-components';

interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange?: () => void;
}

export default function Toggle({ label, checked, onChange }: ToggleProps) {
  return (
    <Label>
      <span>{label}</span>
      <Input checked={checked} type='checkbox' onChange={onChange} />
      <Switch />
    </Label>
  );
}

const Switch = styled.div`
  position: relative;
  width: 44px;
  height: 24px;
  background: #d1d5db;
  border-radius: 32px;
  transition: 300ms all;

  &:before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    top: 50%;
    left: 4px;
    background: ${({ theme }) => theme.colors.white};
    transform: translate(0, -50%);
    transition: 300ms all;
  }
`;

const Input = styled.input`
  position: absolute;
  display: none;

  &:checked + ${Switch} {
    background: ${({ theme }) => theme.colors.main};

    &:before {
      transform: translate(18px, -50%);
      transition: 300ms all;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.deep_gray};
  ${({ theme }) => theme.fonts.toggle_01};
`;
