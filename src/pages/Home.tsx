import styled from 'styled-components';
import MainReview from '@/components/main/MainReview';
import { useMain } from '@/hooks/useMain';

const Home = () => {
  const { reviews } = useMain();
  return (
    <HomeStyle>
      <MainReview reviews={reviews} />
    </HomeStyle>
  );
};

const HomeStyle = styled.div``;

export default Home;
