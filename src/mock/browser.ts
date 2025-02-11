import { setupWorker } from 'msw/browser';
import { addReview, reviewById } from './rewiew';

const handlers = [reviewById, addReview];

export const worker = setupWorker(...handlers);
