import React from 'react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import BookItem from './BookItem';
import { BookStoreThemeProvider } from '../../context/themeContext';

const dummyData = {
  id: 1,
  title: '제목1',
  img: null,
  category_id: 1,
  form: '종류1',
  isbn: 'isbn1',
  summary: '요약1',
  detail: '설명1',
  author: '저자1',
  pages: 100,
  contents: '목차1',
  price: 10000,
  likes: 0,
  pubDate: '2019-01-01',
};

describe('bookItem', () => {
  it('랜더 여부', () => {
    const { getByText, getByAltText } = render(
      <BookStoreThemeProvider>
        <BookItem book={dummyData} />
      </BookStoreThemeProvider>
    );

    expect(getByText(dummyData.title)).toBeInTheDocument();
    expect(getByText(dummyData.summary)).toBeInTheDocument();
    expect(getByText(dummyData.author)).toBeInTheDocument();
    expect(getByText('10,000원')).toBeInTheDocument();
    expect(getByText(dummyData.likes)).toBeInTheDocument();
    expect(getByAltText(dummyData.title)).toHaveAttribute(
      'src',
      `https://picsum.photos/id/${dummyData.img || 0}/600/600`
    );
  });
});
