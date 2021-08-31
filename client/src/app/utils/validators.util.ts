export const isAlphaBetString = (str: string): boolean => {
  if (!str) {
    return false;
  }
  return /^[a-zA-Z]+$/.test(str);
};
