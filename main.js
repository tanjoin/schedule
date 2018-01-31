var element = null;

window.onload = () => {
  main();
};

window.onscroll = () => {
  showScrollButton();
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
};

const scrollNow = () => {
  const day = DayGrids[new Date().getDay()];
  const selector = "#" + day +" > div.mdl-grid.cal-cell.hour-cell.hour-cell_" + new Date().getHours();
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth"
  });
  isFirstScroll = false;
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
