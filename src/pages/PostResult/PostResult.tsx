import styled from 'styled-components';
import PostTitle from '../../components/PostResult/PostTitle';
import PostImage from '../../components/PostResult/PostImage';
import PostText from '../../components/PostResult/PostText';
import { useEffect, useState } from 'react';
import PostButton from '../../components/PostResult/PostButton';
import { isAndroid } from '../../utils/utils';

interface Post {
  image: string;
  text: string;
}
export default function PostResult() {
  const [post, setPost] = useState<Post>({ image: '', text: '' });
  useEffect(() => {
    fetch('/api/postings/123')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPost(data);
      });
  }, []);

  //// TEST START ////
  function copyText() {
    try {
      if (!navigator?.clipboard?.writeText)
        throw new Error('복사 기능이 제공되지 않는 브라우저입니다.');
      // 클립보드에 복사
      window.navigator.clipboard.writeText('dhkfkfkk').then(() => {
        alert('copy');
      });
    } catch (e) {
      alert(e);
    }
  }

  function saveImage() {
    if (isAndroid()) {
      return Android.downloadImage(post.image);
    } else {
      fetch(post.image, {
        method: 'GET',
      })
        .then((res) => {
          return res.blob();
        })
        .then((blob) => {
          const blobURL = URL.createObjectURL(blob);

          const aTag = document.createElement('a');
          aTag.href = blobURL;
          aTag.download = 'sodong_image.png';
          aTag.click();

          alert('다운로드 성공!');
        })
        .catch((e) => {
          console.error(e);
          alert(e);
        });
    }
  }
  //// TEST END ////

  return (
    <PostResultContainter>
      <PostTitle />
      <PostImage url={post.image} />
      <PostText text={post.text} />
      <PostButton image={post.image} text={post.text} />
      <div onClick={copyText}>
        Copy
        <br /> <br />
      </div>
      <div onClick={saveImage}>Download</div>
    </PostResultContainter>
  );
}

const PostResultContainter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  padding-bottom: calc(3.125rem + 3.125rem + 1rem + 1rem); // 버튼 영역 고려
`;
