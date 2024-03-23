import styled from 'styled-components';
import Title from '../../../common/Title/Title';

export default function PostTitle() {
  return (
    <PostTitleContainer>
      <Title highlightText='홍보 타겟'>
        의 <br />
        성별, 연령대를 설정해 주세요
      </Title>
      <SubTitle>
        중복 선택이 가능합니다 <br />
        홍보 타겟에 맞춰 작성해 드릴게요.
      </SubTitle>
    </PostTitleContainer>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 6.5rem;
`;
const SubTitle = styled.p`
  ${({ theme }) => theme.fonts.subTitle};
`;
