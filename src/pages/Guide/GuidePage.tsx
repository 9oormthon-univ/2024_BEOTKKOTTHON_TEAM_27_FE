import { useState } from 'react';
import styled from 'styled-components';
import ImgGuideCreate from '../../assets/Image/guide_create.webp';
import ImgGuideUse from '../../assets/Image/guide_use.webp';
import ButtonFill from '../../components/common/Button/ButtonFill/ButtonFill';
import { useNavigate } from 'react-router';

const tabs = ['포스팅 생성 방법', '포스팅 활용 방법'];

export default function GuidePage() {
  const navigation = useNavigate();
  const [tab, setTab] = useState(0);

  return (
    <GuidePageContainer>
      {/* 탭 영역 */}
      <GuideSelectorContainer>
        {tabs.map((title, idx) => (
          <GuideSelector $selected={idx == tab} onClick={() => setTab(idx)}>
            {title}
          </GuideSelector>
        ))}
      </GuideSelectorContainer>

      {/* 이미지 영역 */}
      {tab == 0 && <img src={ImgGuideCreate} alt='포스팅 생성 방법' style={{ width: '100%' }} />}
      {tab == 1 && <img src={ImgGuideUse} alt='포스팅 생성 방법' style={{ width: '100%' }} />}

      {/*  버튼 영역 */}
      <ButtonFill title='포스팅 만들러 가기' width='90%' onClick={() => navigation(`/post`)} />
    </GuidePageContainer>
  );
}

const GuidePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  max-width: 375px;
  padding: 4rem 0; // header 4rem 영역
`;

const GuideSelectorContainer = styled.div`
  display: flex;

  width: 100%;
  height: 3.4375rem;
`;

const GuideSelector = styled.div<{ $selected: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme, $selected }) => ($selected ? theme.fonts.select_on : theme.fonts.select_off)};
  border-bottom: ${({ $selected }) => ($selected ? '2px solid #2C2DE0' : 'none')};

  transition: all 0.3s;
`;
