import { Book } from '@/models/book.model';
import React from 'react';
import styled from 'styled-components';
import BookBestItem from '../books/BookBestItem';

interface Props {
  books: Book[];
}

const MainBest: React.FC<Props> = ({ books }) => {
  return (
    <MainBestStyle>
      {books.map((book, index) => (
        <BookBestItem key={book.id} book={book} itemIndex={index} />
      ))}
    </MainBestStyle>
  );
};

const MainBestStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 12px;

  @media screen and ${({ theme }) => theme.mediaQuery.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default MainBest;
