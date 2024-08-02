import styled from 'styled-components';
import { IconLock } from '../../../assets/svg';
import { POSTS } from '../../../core/Post';

export default function RelatedPosts() {
  return (
    <PostsContainer>
      {POSTS.map((post, index) => (
        <PostCard key={index}>
          <Image src={post.imgSrc} alt={post.title} />
          <Overlay>
            <IconLock className='lock-icon' />
          </Overlay>
          <Title>{post.title}</Title>
          <Hashtags>
            {post.hashtags.map((hashtag, idx) => (
              <Hashtag key={idx}>{hashtag}</Hashtag>
            ))}
          </Hashtags>
        </PostCard>
      ))}
    </PostsContainer>
  );
}

const PostsContainer = styled.div`
  display: flex;
  min-width: 45rem;
  gap: 1rem;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const PostCard = styled.div`
  position: relative;
  width: 100%;
  border-radius: 8px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  .lock-icon {
    width: 3rem;
    height: 3rem;
    fill: white;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -1.85rem;
  left: 0;
  width: 5rem;

  background: ${({ theme }) => theme.colors.main};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 0.5rem;
  border-radius: 9px 9px 0px 0px;
  ${({ theme }) => theme.fonts.posting_card_sub};
`;

const Hashtags = styled.div`
  position: absolute;
  bottom: -1.8rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
`;

const Hashtag = styled.span`
  ${({ theme }) => theme.fonts.posting_hash_tag};
  background: ${({ theme }) => theme.colors.G_15};
  color: ${({ theme }) => theme.colors.G_09};
  padding: 0.1rem 0.4rem;
  border-radius: 4px;
`;
