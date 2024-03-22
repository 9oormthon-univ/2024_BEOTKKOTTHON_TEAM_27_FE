import React from 'react';
import styled from 'styled-components';

interface ProcessBarProps {
  currentStep: number;
  stepCount: number;
}

const ProcessBar: React.FC<ProcessBarProps> = ({ currentStep, stepCount }) => {
  const barWidth = `${(currentStep / stepCount) * 100}%`;

  return <ProgressBar style={{ width: barWidth }} />;
};

const ProgressBar = styled.div`
  position: absolute;
  height: 4px;
  left: 0;
  top: 4rem;
  background-color: ${({ theme }) => theme.colors.main};
  animation: ani;
  animation-duration: 1s;
  animation-fill-mode: both;
  @keyframes ani {
    0% {
      width: 0; 
    }
  }
`;

export default ProcessBar;
