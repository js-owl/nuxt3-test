import data from './vdnh.json';

export default defineEventHandler(async () => {
  return new Promise<any>((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
