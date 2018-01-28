window.onload = () => {
  main();
};

const DayGrids = [
  "grid-sun",
  "grid-mon",
  "grid-tue",
  "grid-wed",
  "grid-thu",
  "grid-fri",
  "grid-sat",
  "grid-sun"
];

const main = () => {
  setToday();
};

const setToday = () => {
  var day = DayGrids[new Date().getDay()];
  for (var i = 0; i < DayGrids.length; i++) {
    const div = document.getElementById(DayGrids[i]);
    if (DayGrids[i] === day) {
      div.className += " today";
    } else {
      div.className += " other";
    }
  }
};
