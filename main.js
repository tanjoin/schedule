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
  const day = DayGrids[new Date().getDay()];
  const tabs = document.getElementsByClassName("mdl-tabs__tab");
  for (var i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.className = "mdl-tabs__tab";
    if (tab.href === "#" + day) {
      tab.className += " is-active";
    }
  }
  const panels = document.getElementsByClassName("mdl-tabs__panel");
  for (var i = 0; i < panels.length; i++) {
    const panel = panels[i];
    panel.className = "mdl-tabs__panel";
    if (panel.id === day) {
      panel.className += " is-active";
    }
  }
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
