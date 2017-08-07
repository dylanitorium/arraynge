module.exports = (count, offset = 0) => {
  const range = [];
  const limit = count + offset;

  for (let i = offset; i < limit; i++) {
    range.push(i);
  }

  return range;
};