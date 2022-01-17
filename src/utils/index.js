export const prev = (curIndex, lastIndex) =>
  curIndex - 1 < 0 ? lastIndex : curIndex - 1;
export const next = (curIndex, lastIndex) =>
  curIndex + 1 > lastIndex ? 0 : curIndex + 1;

export const pick = ({ index, lastIndex, offset }) => {
  if (index + offset > lastIndex) {
    return offset - 1;
  }

  if (index + offset < 0) {
    return lastIndex + offset + 1;
  }

  return index + offset;
};
