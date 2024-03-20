
/**
 * Format a number, in the form of cents, to a string in the form of dollars
 * @param {number} money - The number to format
 * @returns {string} - The formatted string
 * @example
 * formatMoney(1000) // "$10.00"
 */
export const formatMoney = (money: number): string => {
  return `$${(money / 100).toFixed(2)}`;
};
