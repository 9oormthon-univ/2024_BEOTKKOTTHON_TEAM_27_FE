import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import ButtonPrev from '../../components/common/Button/ButtonPrev/ButtonPrev';
import Title from '../../components/common/Title/Title';

export default function PostNew() {
  return (
    <>
      <Title highlightText='홍보 타겟'>
        의 <br />
        성별, 연령대를 설정해 주세요
      </Title>

      <ButtonFill title='다음' width='11.5rem' />
      <ButtonPrev title='로그인' width='20rem' />
    </>
  );
}
