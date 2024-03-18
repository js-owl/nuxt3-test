export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 3,
          month: 'марта',
          date: 19,
          weekday: 'вт',
          events: [
            { name: 'Флагманский маршрут достижений «Россия — это мы»' },
            { name: 'text32' }
          ]
        }
      ]);
    }, 2000);
  });
});
