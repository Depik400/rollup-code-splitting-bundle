import { useFunction } from '../module1/module1';

export const b = 2;

const { fn } = useFunction(() => {
  console.log('hello world');
});

export { fn };
