export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          events: [{ name: 'Экскурсия «Родная страна»' }, { name: 'text12' }]
        }
      ]);
    }, 2000);
  });
});
