import { BottomSheet } from 'react-spring-bottom-sheet';
import { Image, Text } from '../../assets/svg';
import styled from 'styled-components';
import { Posting } from '../../types/Post';

interface PostBottomSheetProps {
  open: boolean;
  posting?: Posting;
  onDismiss: VoidFunction;
  onSelect: (type: string) => void;
}
export default function PostBottomSheet({
  posting,
  open,
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
          <BottomSheetSelect onClick={() => onSelect('Image')}>
            <Image style={{ width: '110px' }} />
            <p>이미지 생성하기</p> <div>{posting.postingImage_modifiedCount}/3</div>
          </BottomSheetSelect>
          <BottomSheetSelect onClick={() => onSelect('Text')}>
            <Text style={{ width: '110px' }} />
            <p>글 생성하기</p> <div>{posting.postingText_modifiedCount}/3</div>
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
`;
