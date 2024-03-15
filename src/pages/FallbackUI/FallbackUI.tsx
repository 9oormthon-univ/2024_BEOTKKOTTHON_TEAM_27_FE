import styled from 'styled-components';

const FallbackUI = () => {
  return (
    <FallBackWrapper>
      <BoldText>에러가 발생했습니다.</BoldText>
      <LightText>
        <div>인터넷 상황을 확인해주시고,</div>
        계속 에러가 발생할 시 새로고침을 해주세요.
      </LightText>
    </FallBackWrapper>
  );
};

export default FallbackUI;

export const FallBackWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
`;

export const BoldText = styled.div`
  ${({ theme: { fonts } }) => fonts.body_03};
  color: ${({ theme: { colors } }) => colors.black};
  margin-top: 1.6rem;
`;

export const LightText = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  ${({ theme: { fonts } }) => fonts.body_07};
  color: ${({ theme: { colors } }) => colors.G_07};
  margin-top: 0.8rem;
`;
