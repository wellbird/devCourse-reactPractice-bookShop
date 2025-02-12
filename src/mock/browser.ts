import { setupWorker } from 'msw/browser';
import { addReview, reviewById, reviewForMain } from './rewiew';

const handlers = [reviewById, addReview, reviewForMain];

export const worker = setupWorker(...handlers);
