let runAway = false;
let gamesPlayed = 0;

let home = document.getElementById("home");
let about = document.getElementById("about");
let credits = document.getElementById("credits");
// Nav Bar Functions
function hideNavItem(it) {
  if (it.style.opacity === "1") {
    it.style.animation = "fade 0.2s linear reverse";
    it.style.opacity = "0.4";
  } else {
    it.style.animation = "none";
    it.style.opacity = "0.4";
  }
}
function showNavItem(it) {
  if (it.style.opacity === "0.4") {
    it.style.animation = "fade 0.2s linear";
    it.style.opacity = "1";
  } else {
    it.style.animation = "none";
    it.style.opacity = "1";
  }
}
about.onmouseover = function() {
  hideNavItem(credits);
  hideNavItem(home);
  showNavItem(about);
}
credits.onmouseover = function() {
  hideNavItem(about);
  hideNavItem(home);
  showNavItem(credits);
}
home.onmouseover = function() {
  hideNavItem(about);
  hideNavItem(credits);
  showNavItem(home);
}
for (x of document.getElementsByClassName("nav-bar-item")) {
  x.onmouseout = function() {
    showNavItem(about);
    showNavItem(home);
    showNavItem(credits);
  }
  x.onclick = function(x) {
    if (x.id === "home") { id = "welcome"; }
    else { id = x.id; }
    setTimeout(function(id) {
      window.location = "../../../" + id + ".html"; }, 5000, this.href);
    screenFadeOut();
  }
}
function screenFadeOut() {
  let containers = document.getElementsByClassName("container");
  for (x of containers) {
    x.style.animation = "fadeOut 1s ease-in-out reverse";
  }
}

function allRunAwayChanges() {
  if (runAway === true) {
    //call a bunch of things
  }
}

function changeColors() {
  // document.getElementsByTagName("BODY").style.backgroundColor = "#8f8f8f";
  document.getElementsByTagName("IMG").style.filter = "grayscale(" + gamesPlayed*20 + "%)";
}
function changeRunner() {
  document.getElementsByClassName("away").style.display = "inline";
  document.getElementById("zero").style.display = "none";
}
