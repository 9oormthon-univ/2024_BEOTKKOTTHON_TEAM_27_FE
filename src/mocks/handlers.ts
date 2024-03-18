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
  http.get('api/postings/:postingId', (req) => {
    return HttpResponse.json({
      postingId: req.params.postingId,
      postingType: '포스팅 타입',
      postingChannel: '포스팅 채널',
      createdDate: '2024-03-14T12:00:00Z',
      modifiedDate: '2024-03-14T12:00:00Z',
      storeId: 1234567890,
      userId: 987654321,
      text: '망원동 성공 맛집 딸기프토 감성 카페☕️ \n쫀득, 부드러운 토스트 위에 크림치즈와 딸기가 듬뿍!🍓 \n비주얼부터 맛까지 빠짐없는 망원동 필수 코스 ✨\n\n# 망원동카페 # 합정카페 \n🏷️ 망원동 #콘웰 \n📍 서울 마포구 월드컵로15길 40 2층',
      image:
        'https://firebasestorage.googleapis.com/v0/b/twitter-72580.appspot.com/o/img%2Fimage_example.png?alt=media&token=5cf53d9e-93e2-4234-a075-8261c87df3ea',
    });
  }),
];
