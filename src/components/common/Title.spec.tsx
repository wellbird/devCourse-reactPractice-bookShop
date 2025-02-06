import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Title from './Title';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Title 컴포넌트 테스트', () => {
  it('랜더를 확인', () => {
    // 랜더
    render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    // 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });
  it('size props 적용', () => {
    // 랜더
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large">제목</Title>
      </BookStoreThemeProvider>
    );
    // 확인
    expect(container?.firstChild).toHaveStyle({ fontSize: '2rem' });
  });

  it('color props 적용', () => {
    // 랜더
    const { container } = render(
      <BookStoreThemeProvider>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvider>
    );
    // 확인
    expect(container?.firstChild).toHaveStyle({ color: 'rgb(255, 88, 0)' });
  });
});
