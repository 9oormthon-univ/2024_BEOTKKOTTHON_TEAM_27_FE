import styled from 'styled-components';
import TextCardWithImage from '../../components/PostHistory/TextCardWithImage';

import { useGetHistory } from '../../hooks/queries/post/useGetHistory';
import CommonHeader from '../../components/common/Header/HeaderCommon';

export default function PostHistoryPage() {
  const userId = localStorage.getItem('userId') || '';
  const storeId = localStorage.getItem('storeId') || '';

  const { data } = useGetHistory({
    userId: userId,
    storeId: storeId,
  });

  return (
    <>
      <CommonHeader title='포스팅' />

      <HistoryPageContainer>
        {data?.data.postingList?.map((data, index) => {
          if (data.postingImage) {
            return (
              <TextCardWithImage
                key={index}
                postingId={data.postingId}
                channel={data.postingChannel}
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
                postingId={data.postingId}
                channel={data.postingChannel}
                date={data.postingText_createdDate}
                text={data.postingText}
              />
            );
          }
        })}
      </HistoryPageContainer>
    </>
  );
}

const HistoryPageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  padding: 5rem 0 2rem;
`;
