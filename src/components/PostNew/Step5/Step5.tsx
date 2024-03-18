import React, { useState } from 'react';
import styled from 'styled-components';
import PostFooter from '../PostFooter/PostFooter';
import Title from '../../common/Title/Title';
import { Xmark } from '../../../assets/svg';

export default function Step5() {
  const [content, setContent] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const handleContentClear = () => {
    setContent('');
  };

  const characterCount = content.length;
  const maxCharacters = 100;

  return (
    <>
      <PostTitleContainer>
        <Title>
          <Highlight>강조하고 싶은 내용</Highlight>을 <br />
          소개해 주세요
        </Title>
      </PostTitleContainer>

      <ContentInputContainer>
        <ContentInput
          value={content}
          onChange={handleChange}
          rows={1}
          placeholder='자세히 적을 수록 AI가 더 만족스러운 
결과를 생성해요.'
        />
        {content && (
          <Xmark
            onClick={handleContentClear}
            style={{ width: '1.5rem', position: 'absolute', right: '13%', padding: '4% 0' }}
          />
        )}
      </ContentInputContainer>
      <CharacterCount>
        {characterCount}/{maxCharacters}
      </CharacterCount>
      <PostFooter />
    </>
  );
}

const PostTitleContainer = styled.div`
  margin-top: 7.5rem;
  width: 100vw;
`;

const ContentInputContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`;

const ContentInput = styled.textarea`
  width: 100vw;
  height: auto;
  min-height: 130px;

  border: none;
  outline: none;
  border-radius: 5px;
  background: #f9f9f9;
  padding: 0.8rem 4rem 0.8rem 0.8rem;
  ${({ theme }) => theme.fonts.content_01};
`;

const CharacterCount = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;

  ${({ theme }) => theme.fonts.content_01};
  color: ${({ theme }) => theme.colors.gray};
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.main};
`;
