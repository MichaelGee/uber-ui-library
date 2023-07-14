export const ellipsize = (text, maxlimit) => {
  if (text) {
    if (text.length > maxlimit) {
      return `${text.substring(0, maxlimit - 3)}...`;
    }
    return text;
  }
  return '';
};
