import { setupWorker } from 'msw/browser';
import { reviewById } from './rewiew';

const handlers = [reviewById];

export const worker = setupWorker(...handlers);
