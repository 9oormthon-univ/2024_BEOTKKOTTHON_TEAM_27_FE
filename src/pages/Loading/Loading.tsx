import styled from 'styled-components';

export default function Loading() {
  return (
    <LoadingWrapper>
      {/* <LottieAnimation
        animation={SymbolLoading}
        customStyle={{ width: '12rem', height: '12rem' }}
      /> */}
      <Text>불러오는 중...</Text>
    </LoadingWrapper>
  );
}

export const LoadingWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexCenter({})};
  width: 100%;
  height: 100%;
`;

export const Text = styled.div`
  ${({ theme: { fonts } }) => fonts.body_10};
  color: ${({ theme: { colors } }) => colors.G_07};
  margin-top: 0.8rem;
`;
