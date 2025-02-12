import { setupWorker } from 'msw/browser';
import { addReview, reviewById, reviewForMain } from './rewiew';
import { bestBooks } from './books';
import { banners } from './banner';

const handlers = [reviewById, addReview, reviewForMain, bestBooks, banners];

export const worker = setupWorker(...handlers);
