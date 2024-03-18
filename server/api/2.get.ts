export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 2,
          month: 'марта',
          date: 18,
          weekday: 'пн',
          events: [
            { name: 'Экскурсия «Цифровое погружение»' },
            { name: 'text22' }
          ]
        }
      ]);
    }, 2000);
  });
});
