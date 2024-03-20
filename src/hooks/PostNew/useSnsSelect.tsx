import { useOnboardingContext } from '../../context/PostNew/PonstNewContext';

const useSnsSelect = () => {
  const { onboardingInfo, updatePostInfo } = useOnboardingContext();
  // const [selectedSNS, setSelectedSNS] = useState<string | null>(null);

  // const handleSnsSelect = (date: Date) => {
  //   // const padTwoDigits = (value: number) => String(value).padStart(2, '0');

  //   // const formattedDate = 'insta';
  //   // updatePostInfo({ postingChannel: formattedDate });

  //   // setSelectedDate(date);

  // };
  const handleSnsSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value;

    updatePostInfo({ postingChannel: inputValue });
  };

  return {
    onboardingInfo,
    handleSnsSelect,
  };
};

export default useSnsSelect;
