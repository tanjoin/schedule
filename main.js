window.onload = () => {
  main();
};

const DayGrids = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];

const main = () => {
  setToday();
  addInterceptLink();
};

const setToday = () => {
  var day = DayGrids[new Date().getDay()];
  document.getElementById(day).click()
};

const addInterceptLink = () => {
  var targets = document.getElementsByTagName('a');
  for (var i = 0; i < targets.length; i++) {
    if (/abema.tv/gi.test(targets[i].href)) {
      targets[i].addEventListener('click', (event) => {
        window.open(event.target.href,"","width=1568,height=882");
        event.preventDefault();
      }, false);      
    }
  }
}
