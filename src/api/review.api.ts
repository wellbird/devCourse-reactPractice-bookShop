import { BookReviewItem, BookReviewItemWrite } from '@/models/book.model';
import { requestHandler } from './http';

export const fetchBookReview = async (bookId: string) => {
  return await requestHandler<BookReviewItem[]>('get', `/reviews/${bookId}`);
};

export const addBookReview = async (
  bookId: string,
  data: BookReviewItemWrite
) => {
  return await requestHandler('post', `/reviews/${bookId}`, data);
};

export const fetchReviewAll = async () => {
  return await requestHandler<BookReviewItem[]>('get', '/reviews');
};
