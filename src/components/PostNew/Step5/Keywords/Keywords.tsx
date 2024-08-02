import styled from 'styled-components';
import { PostInfo } from '../../../../types/PostNew';
import { useEffect, useState } from 'react';
import {
  getAIKeywordsPrompt,
  usePostChatGPT,
} from '../../../../hooks/mutations/gpt/usePostChatGPT';
import KeywordsTip from '../Tip/KeywordsTip';

interface KeywordsProps {
  post: PostInfo;
}
export default function Keywords({ post }: KeywordsProps) {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [selectedKeywords, setSelectedKeywords] = useState<boolean[]>([]);

  const { mutate: getAIKeywords, isPending } = usePostChatGPT({
    onSuccess: (res) => {
      console.log('>>', res);
      const k = JSON.parse(res.text);
      setKeywords(k);
      setSelectedKeywords(new Array(k.length).fill(false));
      console.log(k);
    },
    onError: (e) => {
      console.error(e);
    },
  });

  useEffect(() => {
    const prompt = getAIKeywordsPrompt(post);

    console.log('onboardingInfo', post);
    console.log('prompt', prompt);
    getAIKeywords({ content: prompt });
  }, [post]);

  const handleKeywordClick = (index: number) => {
    const updatedSelectedKeywords = [...selectedKeywords];
    updatedSelectedKeywords[index] = !updatedSelectedKeywords[index];
    setSelectedKeywords(updatedSelectedKeywords);
  };

  return (
    <KeywordsContainer>
      <KeywordsTitle>AI 추천 키워드</KeywordsTitle>
      <KeywordsBox>
        {isPending && keywords.length < 1 && (
          <>
            <SkeletonKeyword />
            <SkeletonKeyword width='30px' />
            <SkeletonKeyword width='50px' />
          </>
        )}

        {keywords.map((keyword, idx) => (
          <Keyword
            key={keyword}
            selected={selectedKeywords[idx]}
            onClick={() => handleKeywordClick(idx)}
          >
            {keyword}
          </Keyword>
        ))}
      </KeywordsBox>

      <KeywordsTip />
    </KeywordsContainer>
  );
}

const KeywordsContainer = styled.div`
  margin: 20px 0.5rem 40px;
`;

const KeywordsTitle = styled.h3`
  ${({ theme }) => theme.fonts.heading_01};
`;

const KeywordsBox = styled.div`
  ${({ theme }) => theme.mixins.flexBox('row', 'flex-start', 'center')};
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 11px;
`;

const Keyword = styled.div<{ selected: boolean }>`
  padding: 3px 8px;
  border-radius: 26px;

  ${({ theme }) => theme.fonts.keyword};

  color: ${({ selected }) => (selected ? '#fff' : '#1e1e1e')};
  background: ${({ selected }) => (selected ? '#838383' : '#fff')};
  border: ${({ selected }) => (selected ? '1px solid #fff' : '1px dashed #bdbdbd')};

  cursor: pointer;
`;

const SkeletonKeyword = styled.div<{ width?: string }>`
  width: ${({ width }) => (width ? width : '80px;')};
  height: 24px;
  border-radius: 15px;

  ${({ theme }) => theme.mixins.skeleton};
`;
