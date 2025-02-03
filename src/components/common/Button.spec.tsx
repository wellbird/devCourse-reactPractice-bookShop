import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Button from './Button';
import { BookStoreThemeProvider } from '../../context/themeContext';

describe('Button 컴포넌트 테스트', () => {
  it('랜더를 확인', () => {
    // 랜더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          제목
        </Button>
      </BookStoreThemeProvider>
    );
    // 확인
    expect(screen.getByText('제목')).toBeInTheDocument();
  });
  it('size props 적용', () => {
    // 랜더
    render(
      <BookStoreThemeProvider>
        <Button size="large" scheme="primary">
          제목
        </Button>
      </BookStoreThemeProvider>
    );
    // 확인
    expect(screen.getByRole('button')).toHaveStyle({ fontSize: '1.5rem' });
  });
});
