export const useUtils = () => {
  const say = () => console.log('hi composables');
  return { say };
};
