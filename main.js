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
  "grid-sat"
];

const main = () => {
  setToday();
  addInterceptLink();
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

const addInterceptLink = () => {
  var targets = document.getElementsByTagName('a');
  for (var i = 0; i < targets.length; i++) {
    var a = targets[i];
    if (a.href.test(//gi)) {
      a.addEventListener('click', (event) => {
        window.open(a.href,"","width=1568,height=882");
        event.preventDefault();
      }, false);      
    }
  }
}
