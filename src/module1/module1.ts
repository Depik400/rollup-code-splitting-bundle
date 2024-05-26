export const a = 1;

export function useFunction(callback: () => void) {
  return {
    fn: callback,
  };
}
