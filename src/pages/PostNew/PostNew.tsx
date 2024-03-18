import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import ButtonPrev from '../../components/common/Button/ButtonPrev/ButtonPrev';
import Modal from '../../components/common/Modal/Modal';

export default function PostNew() {
  return (
    <>
      <ButtonFill title='다음' width='11.5rem' />
      <ButtonPrev title='로그인' width='20rem' />
      <Modal>
        상품 정보를 자동으로
        <br />
        불러올 수 없어요 <br />
      </Modal>
    </>
  );
}
