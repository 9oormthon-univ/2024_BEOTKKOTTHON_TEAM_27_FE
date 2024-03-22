import styled from 'styled-components';
import TextCardWithImage from '../../components/PostHistory/TextCardWithImage/TextCardWithImage';
import { useOutletContext } from 'react-router-dom';
import { HeaderLayoutContext } from '../../layouts/HeaderLayout';
import { useEffect } from 'react';
import { useGetHistory } from '../../hooks/queries/post/useGetHistory';

export default function PostHistoryPage() {
  /**
   * 헤더 타이틀 변경
   */
  const { setTitle } = useOutletContext<HeaderLayoutContext>();
  useEffect(() => {
    setTitle('내가 만든 포스팅');
  }, [setTitle]);

  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetHistory({
    userId: userId,
    storeId: storeId,
  });

  const posting = data?.data.postingList;
  console.log('data는', posting);

  return (
    <HistoryPageContainer>
      {posting?.map((data, index) => {
        if (data.postingImage) {
          return (
            <TextCardWithImage
              key={index}
              date={data.postingImage_createdDate}
              text={data.postingText}
              imageUrl={data.postingImage}
              imageAlt={data.postingChannel}
            />
          );
        } else {
          return (
            <TextCardWithImage
              key={index}
              date={data.postingText_createdDate}
              text={data.postingText}
            />
          );
        }
      })}
    </HistoryPageContainer>
  );
}

const HistoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: 5rem;
`;
