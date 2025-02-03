import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import InputText from './Input';
import { BookStoreThemeProvider } from '../../context/themeContext';
import React from 'react';

describe('InputText 컴포넌트 테스트', () => {
  it('랜더를 확인', () => {
    // 랜더
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력하세요" />
      </BookStoreThemeProvider>
    );
    // 확인
    expect(
      screen.getByPlaceholderText('여기에 입력하세요')
    ).toBeInTheDocument();
  });

  it('forwardRef 테스트', () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvider>
        <InputText placeholder="여기에 입력하세요" ref={ref} />
      </BookStoreThemeProvider>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
