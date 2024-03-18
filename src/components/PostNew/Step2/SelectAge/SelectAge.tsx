import { useState } from 'react';
import styled from 'styled-components';
import { AgeBoxProps } from '../../../../types/PostNew';

export default function SelectAge() {
  const [selectedAges, setSelectedAges] = useState<string[]>([]);

  function toggleAge(age: string) {
    if (selectedAges.includes(age)) {
      setSelectedAges(selectedAges.filter((item) => item !== age));
    } else {
      setSelectedAges([...selectedAges, age]);
    }
  }

  const ageGroups = ['10대', '20대', '30대', '40대', '50대', '기타'];

  return (
    <AgeSelection>
      {ageGroups.map((age) => (
        <AgeBox key={age} selected={selectedAges.includes(age)} onClick={() => toggleAge(age)}>
          {age}
        </AgeBox>
      ))}
    </AgeSelection>
  );
}

const AgeSelection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  flex-wrap: wrap;
  margin-top: 4rem;
  gap: 1rem;
`;

const AgeBox = styled.div<AgeBoxProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5.5rem;
  height: 5.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  cursor: pointer;
  ${({ theme }) => theme.fonts.heading_01};
  color: ${({ selected }) => (selected ? '#402FFF' : '#BDBDBD')};
  border: ${({ selected }) => (selected ? 'none' : '1px solid #ccc')};
  background-color: ${({ selected }) => (selected ? '#DFE7FF' : 'transparent')};
`;
