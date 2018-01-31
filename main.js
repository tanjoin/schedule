var element = null;
var nowCell = null;

const SECOND_MILLISECOND = 1000;
const MINUTE_MILLISECOND = 60 * SECOND_MILLISECOND;
const HOUR_MILLISECOND = 60 * MINUTE_MILLISECOND;
const DAY_MILLISECOND = 24 * HOUR_MILLISECOND;
const WEEK_MILLISECOND = 7 * DAY_MILLISECOND;
const YEAR_MILLISECOND = 365 * DAY_MILLISECOND;

window.onload = () => {
  main();
};

window.onscroll = () => {
  showScrollButton();
}

const check = () => {
  var target = new Date();
  target.setHours(target.getHours() + 1);
  target.setMinutes(0);
  target.setSeconds(0);

  setTimeout(target.getTime() - new Date().getTime(), () => {
    main();
  });
}

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
  selectToday();
  addInterceptLink();
  setTimeout(() => {
    scrollNow();
    return false;
  }, 300);
  document.getElementById('scroll-to-top').onclick = () => {
    scrollTop();
  };
  check();
};

const scrollNow = () => {
  const day = DayGrids[new Date().getDay()];
  const selector = "#" + day +" > div.mdl-grid.cal-cell.hour-cell.hour-cell_" + new Date().getHours();
  const cell = document.querySelector(selector);
  cell.scrollIntoView({
    behavior: "smooth"
  });
  isFirstScroll = false;
  if (nowCell) {
    nowCell.classList.remove('today');
  }
  nowCell = cell;
  nowCell.classList.add('today');
}

const scrollTop = () => {
  document.getElementById("container").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
}

const showScrollButton = () => {
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
  if (element == null) {
    element = document.getElementById('scroll-to-top');
  }
  if (scrollTop / scrollHeight > 0.1) {
    element.classList.remove('hidden');
    element.classList.add('show');
  } else {
    element.classList.add('hidden');
    element.classList.remove('show');
  }
}

const selectToday = () => {
  const day = DayGrids[new Date().getDay()];
  const tabs = document.getElementsByClassName("mdl-tabs__tab");
  for (var i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    tab.className = "mdl-tabs__tab";
    if (tab.href.endsWith("#" + day)) {
      console.log(tab.href);
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
