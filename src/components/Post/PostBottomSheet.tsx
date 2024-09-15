import { BottomSheet } from 'react-spring-bottom-sheet';
import styled from 'styled-components';
import recreateIcon from '../../assets/Icon/recreate_icon.png';
import recreateTextIcon from '../../assets/Icon/text_recreate_icon.png';

interface PostBottomSheetProps {
  open: boolean;
  imgCnt: number;
  txtCnt: number;
  type: string;
  onDismiss: VoidFunction;
  onSelect: (type: string) => void;
}
export default function PostBottomSheet({
  open,
  imgCnt,
  txtCnt,
  type,
  onDismiss,
  onSelect,
}: PostBottomSheetProps) {
  return (
    <BottomSheet open={open} onDismiss={onDismiss}>
      <BottomSheetContainer>
        {/* 상단 */}
        <BottomSheetTitle>포스트 다시 생성하기</BottomSheetTitle>
        <BottomSheetSubtitle>
          다시 생성하기는 <b>15초</b> 이후, 최대 <b>3회</b>까지 가능해요
        </BottomSheetSubtitle>

        {/* 중간 - 선택 */}
        <BottomSheetSelectContainer>
          {type == 'Both' && (
            <BottomSheetSelect onClick={() => onSelect('Image')}>
              <img src={recreateIcon} />
              <p>이미지 생성하기</p> <div>{imgCnt}/3</div>
            </BottomSheetSelect>
          )}

          <BottomSheetSelect onClick={() => onSelect('Text')}>
            <img src={recreateTextIcon} />
            <p>글 생성하기</p> <div>{txtCnt}/3</div>
          </BottomSheetSelect>
        </BottomSheetSelectContainer>
      </BottomSheetContainer>
    </BottomSheet>
  );
}

const BottomSheetContainer = styled.section`
  display: flex;
  flex-direction: column;

  padding: 1.5rem 1.7rem;
`;

const BottomSheetTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading_02};
`;

const BottomSheetSubtitle = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  ${({ theme }) => theme.fonts.p_01};

  > b {
    font-weight: 700;
  }
`;

const BottomSheetSelectContainer = styled.div`
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin-top: 1.75rem;
`;

const BottomSheetSelect = styled.div`
  flex: 1;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.deep_gray};

  > p {
    ${({ theme }) => theme.fonts.content_01};
  }

  > div {
    ${({ theme }) => theme.fonts.ex_01};
  }

  > img {
    width: 110px;
  }
`;
