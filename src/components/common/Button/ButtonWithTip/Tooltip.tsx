import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface TooltipProps {
  text: string;
  top?: string;
  timeout?: number;
}
export default function Tooltip({ text, top, timeout }: TooltipProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const time = timeout ? timeout : 3000;
    const timer = setTimeout(() => {
      setVisible(false);
    }, time);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Tip $top={top} $visible={visible} onClick={() => setVisible(false)}>
      {text}
    </Tip>
  );
}

const Tip = styled.div<{ $top?: string; $visible: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 1.875rem;

  position: absolute;
  top: ${({ $top }) => $top || '-2.3rem'};

  ${({ theme }) => theme.fonts.tooltip};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.main};
  border-radius: 0.625rem;

  opacity: ${({ $visible }) => ($visible ? '1' : '0')};
  transition: opacity 0.5s;

  box-shadow: 0px 4px 30px 0px rgba(52, 47, 255, 0.1);

  &:after {
    position: absolute;
    bottom: -7px;
    right: 20px;

    content: '';
    color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 4px 30px 0px rgba(52, 47, 255, 0.1);

    border-bottom: 8px solid;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    transform: rotate(-180deg);

    z-index: 1;
  }
`;
