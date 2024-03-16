// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/api/users', () => {
    return HttpResponse.json([
      {
        id: 1,
        name: 'Ham',
      },
    ]);
  }),
];
