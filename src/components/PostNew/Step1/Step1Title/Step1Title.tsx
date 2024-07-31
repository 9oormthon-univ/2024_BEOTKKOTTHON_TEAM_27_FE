import Title from '../../../common/Title/Title';
import styled from 'styled-components';

export default function Step1Title() {
  return (
    <>
      <Title>
        해당 포스팅을 올릴
        <br />
        <Highlight>SNS</Highlight>를 선택해 주세요
      </Title>
      <SubTitle>
        선택하신 SNS에 맞게 <br />
        AI 마법사, 소동이가 작성해 드릴게요!
      </SubTitle>
    </>
  );
}

export const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;

const SubTitle = styled.p`
  margin-left: 0.5rem;
  ${({ theme }) => theme.fonts.subTitle};
`;
