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

export const startTimer = () => {
  let beginMinutes = "00";
  let beginSeconds = "00";

  var totalSeconds = 0;
  setInterval(setTime, 1000);

  function setTime() {
    ++totalSeconds;
    beginSeconds = pad(totalSeconds % 60);
    beginMinutes = pad(parseInt(totalSeconds / 60));
  }

  function pad(val) {
    var valString = val + "";
    if (valString.length < 2) {
      return "0" + valString;
    } else {
      return valString;
    }
  }

  return beginMinutes + ":" + beginSeconds;
};
