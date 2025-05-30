export const addEllipsis = (text, limit = 50) => {
  if (text.length > limit) {
    return text.substring(0, limit) + "...";
  }
  return text;
};
