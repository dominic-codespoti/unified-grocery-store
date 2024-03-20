/* eslint-disable @typescript-eslint/no-unsafe-argument */
/**
 * Debounce function
 * @param func - function to be debounced
 * @param delay - delay in milliseconds
 * @returns debounced function
 * @example
 * const debouncedFunction = debounce(() => console.log('Hello'), 1000);
 * debouncedFunction(); // Will log 'Hello' after 1 second
 */
export const debounce = (func: (...args: any[]) => void, delay: number): ((...args: any[]) => void) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => { func(...args); }, delay);
  };
};
