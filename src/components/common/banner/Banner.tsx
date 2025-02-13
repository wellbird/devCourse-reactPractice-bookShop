import { Banner as IBanner } from '@/models/banner.model';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import BannerItem from './BannerItem';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

interface Props {
  banners: IBanner[];
}

const Banner: React.FC<Props> = ({ banners }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const transformValue = useMemo(() => {
    return currentIndex * -100;
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };
  const handleNext = () => {
    if (currentIndex === banners.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <BannerStyle>
      <BannerContainerStyle $transformValue={transformValue}>
        {banners.map((banner) => (
          <BannerItem key={banner.id} banner={banner} />
        ))}
      </BannerContainerStyle>
      <BannerButtonStyle>
        <button className="prev" onClick={handlePrev}>
          <FaAngleLeft />
        </button>
        <button className="next" onClick={handleNext}>
          <FaAngleRight />
        </button>
      </BannerButtonStyle>
      <BannerIndicatorStyle>
        {banners.map((banner, index) => (
          <span
            key={`indicator${banner.id}`}
            className={currentIndex === index ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
          ></span>
        ))}
      </BannerIndicatorStyle>
    </BannerStyle>
  );
};

interface BannerContainerStyleProps {
  $transformValue: number;
}

const BannerStyle = styled.div`
  overflow: hidden;
  position: relative;
`;
const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
  display: flex;
  transform: translateX(${(props) => props.$transformValue}%);
  transition: transform 0.5s ease-in-out;
`;
const BannerButtonStyle = styled.div`
  button {
    border: 0;
    width: 40px;
    height: 40px;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 500px;
    font-size: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: #fff;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
    @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
      width: 24px;
      height: 24px;
      font-size: 1.5rem;
      &.prev {
        left: 0px;
      }

      &.next {
        right: 0px;
      }
    }
  }
`;

const BannerIndicatorStyle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%);

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100px;
    background: #fff;
    margin: 0 4px;
    cursor: pointer;

    &.active {
      background: ${({ theme }) => theme.color.primary};
    }
  }

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    bottom: 0;
    span {
      width: 12px;
      height: 12px;
      &.active {
        width: 24px;
      }
    }
  }
`;

export default Banner;
