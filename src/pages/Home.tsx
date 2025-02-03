import React from 'react';
import Title from '../components/common/Title';
import Button from '../components/common/Button';
import InputText from '../components/common/Input';

const Home = () => {
  return (
    <>
      <Title size="large">제목 테스트</Title>
      <Button size="large" scheme="normal">
        버튼 테스트
      </Button>
      <InputText placeholder="여기에 입력하세요" />
      <div>home body</div>
    </>
  );
};

export default Home;
