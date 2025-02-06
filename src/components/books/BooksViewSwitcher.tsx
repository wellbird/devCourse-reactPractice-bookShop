import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { FaList, FaTh } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import { QUERYSTRING } from '../../constants/querystring';

const viewOptions = [
  {
    value: 'list',
    icon: <FaList />,
  },
  {
    value: 'grid',
    icon: <FaTh />,
  },
];

export type ViewMode = 'list' | 'grid';

const BooksViewSwitcher = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const handleSwitch = (value: ViewMode) => {
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set(QUERYSTRING.VIEW, value);
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    if (!searchParams.get(QUERYSTRING.VIEW)) {
      handleSwitch('grid');
    }
  }, []);

  return (
    <BooksViewSwitcherStyle>
      {viewOptions.map((options) => (
        <Button
          size="medium"
          scheme={
            searchParams.get(QUERYSTRING.VIEW) === options.value
              ? 'primary'
              : 'normal'
          }
          key={options.value}
          onClick={() => handleSwitch(options.value as ViewMode)}
        >
          {options.icon}
        </Button>
      ))}
    </BooksViewSwitcherStyle>
  );
};

const BooksViewSwitcherStyle = styled.div`
  display: flex;
  gap: 8px;
  svg {
    fill: white;
  }
`;
export default BooksViewSwitcher;
