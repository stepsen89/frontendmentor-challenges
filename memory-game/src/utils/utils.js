const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

export const createRandomisedGrid = (size) => {
  let items = Array.from({ length: size / 2 }, (_, idx) => {
    return {
      value: ++idx,
      show: false,
      solved: false,
    };
  });

  let gridItems = [...items, ...items];

  shuffleArray(gridItems);

  return gridItems;
};
