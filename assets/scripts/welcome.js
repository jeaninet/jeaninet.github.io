let runner = document.getElementById("runners");
let about = document.getElementById("about");
let credits = document.getElementById("credits");
let welcomeTo = document.getElementById("welcome-to");
let omelas = document.getElementById("omelas");

function doWelcomeThings(walk) {
  changeRunner(walk);
  document.getElementById("welcome").style.display = "block";
  restoreWelcome();
  changeBackgroundColor(walk);
}

function restoreWelcome() {
  about.style.opacity = "1";
  about.style.animation = "fadeIn3 4s ease-in";
  credits.style.opacity = "1";
  credits.style.animation = "fadeIn4 5s ease-in";
  welcomeTo.style.opacity = "1";
  welcomeTo.style.animation = "fadeIn 1.5s ease-in";
  omelas.style.opacity = "1";
  omelas.style.animation = "fadeIn2 2.5s ease-in";
  var runners = document.getElementById("runners");
  runners.style.display = "block";
  runners.style.opacity = "1";
  runners.style.animation = "fadeIn4 7s ease-in, bounceUp 2s linear 6s infinite";
  runners.onclick = runnerClicked;
}
document.getElementById("runners").onclick = runnerClicked;
function runnerClicked() {
  wipeOutWelcome();
  slideInPageTwo();
  sunReflection();
  cityFloating();
}
function changeBackgroundColor(walk) {
  if (walk === true) {
    document.body.style.backgroundColor = "#ffac30";
  } else {
    document.body.style.backgroundColor = "#222";
    for (image of document.getElementsByTagName("img")) {
      image.style.filter = "saturate(0)";
    }
  }
}
function changeRunner(walk) {
  if (walk === true) {
    for (x of document.getElementsByClassName("away")) {
      x.style.display = "block";
    }
    document.getElementById("zero").style.display = "none";
  } else {
    for (x of document.getElementsByClassName("away")) {
      x.style.display = "none";
    }
    document.getElementById("zero").style.display = "inline";
  }
}

// Nav Bar Functions
function hideNavItem(item) {
  let it = document.getElementById(item);
  if (it.style.opacity === "1") {
    it.style.opacity = "0.4";
  } else {
    it.style.animation = "none";
    it.style.opacity = "0.4";
  }
}
document.getElementById("about").onmouseover = function() {
  hideNavItem("credits");
  showNavItem("about");
}
document.getElementById("credits").onmouseover = function() {
  hideNavItem("about");
  showNavItem("credits");
}
function showNavItem(item) {
  let it = document.getElementById(item);
  if (it.style.opacity === "0.4") {
    it.style.opacity = "1";
  } else {
    it.style.animation = "none";
    it.style.opacity = "1";
  }
}
document.getElementById("about").onmouseout = function() {
  showNavItem("about");
  showNavItem("credits");
}
document.getElementById("credits").onmouseout = function() {
  showNavItem("credits");
  showNavItem("about");
}

// WELCOME TO MEADOW
function wipeOutWelcome() {
  let time = 0.7;
  runner.style.display = "none";
  about.style.animation = "flyUp " + time + "s ease-in 0.3s";
  about.style.animationFillMode = "forwards";
  credits.style.animation = "flyUp " + time + "s ease-in 0.4s";
  credits.style.animationFillMode = "forwards";
  welcomeTo.style.animation = "flyUp " + time + "s ease-in 0.6s";
  welcomeTo.style.animationFillMode = "forwards";
  omelas.style.animation = "flyUp " + time + "s ease-in 0.7s";
  omelas.style.animationFillMode = "forwards";
}
function slideInPageTwo() {
  setTimeout(function() { document.getElementById("meadow").style.display = "block"; }, 700);
  let meadowItems = document.getElementsByClassName("meadow-items");
  let time = 1.2;
  let i = 0;
  for (x of meadowItems) {
    x.style.animation = "flyIn " + time + "s ease-out " + (0.6 + 0.1 * i) + "s";
    x.style.animationFillMode = "both";
    i += 1;
  }
}

// MEADOW
function sunReflection() {
  for (i = 1; i < 5; i++) {
    var id = "sun-reflection-" + i;
    var animation = "flyIn 1.2s ease-out " + (2 + 0.1 * i) + "s, sunLeft 1.5s ease-in " + 0.75 * (i / 2) + "s infinite";
    document.getElementById(id).style.animation = animation;
    document.getElementById(id).style.animationFillMode = "both";
  }
}
function cityFloating() {
  city = document.getElementById("city");
  city.style.animation = "flyIn 1.2s ease-out 1.8s, bounceUp 1.5s linear 2.5s infinite";
  city.style.animationFillMode = "both";
}

// MEADOW TO FESTIVAL
document.getElementById("meadow-to-festival").onclick = doFestivalThings;
function doFestivalThings() {
  document.getElementById("festival").style.opacity = "1";
  document.getElementById("meadow").style.animation = "fadeIn 1s linear reverse";
  document.getElementById("meadow").style.animationFillMode = "forwards";
  document.getElementById("welcome").style.display = "none";
  setTimeout(function() {
    document.getElementById("festival").style.display = "block";
    document.getElementById("meadow").style.display = "none";
  }, 1000);
  setTimeout(function() {
    document.getElementById("runner").style.display = "block";
    document.getElementById("festival-to-palace").style.display = "block";
  }, 7950);
}

// FESTIVAL TO PALACE
document.getElementById("festival-to-palace").onclick = doPalaceThings;
function doPalaceThings() {
  document.getElementById("festival").style.animation = "fadeIn 1s linear reverse";
  document.getElementById("festival").style.animationFillMode = "forwards";
  setTimeout(function() {
    document.getElementById("palace").style.display = "block";
    document.getElementById("festival").style.display = "none";
  }, 1000);
  setTimeout(function() {
    document.getElementById("drag-runner").style.display = "block";
    document.getElementById("div2").style.display = "block";
  }, 7950);
}

// PALACE
function allowDrop(ev) { ev.preventDefault(); }
function drag(ev) { ev.dataTransfer.setData("img", ev.target.id); }
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("img");
  ev.target.append(document.getElementById(data));

// PALACE TO BASEMENT
  doBasementThings();
}

function doBasementThings() {
  document.getElementById("palace").style.animation = "fadeIn 1s linear reverse";
  document.getElementById("palace").style.animationFillMode = "forwards";
  setTimeout(function() {
    document.body.style.backgroundColor = "#222";
    document.getElementById("basement").style.display = "block";
    document.getElementById("palace").style.display = "none";
  }, 1000);
}
// BASEMENT
let back = document.getElementById("back");
let next = document.getElementById("next");
let stay = document.getElementById("stay");
let runAway = document.getElementById("run");
let buttons = document.getElementsByClassName("button");
let text = document.getElementsByClassName("text");
let basementItems = document.getElementsByClassName("basement-items");
let basement = document.getElementById("basement");

back.onclick = function() { doButtonAction(back); }
next.onclick = function() { doButtonAction(next); }
stay.onclick = function() {
  basement.style.animation = "fadeIn 1s ease-in-out reverse";
  for (x of buttons) {
    x.style.animation = "fadeIn 1s ease-in-out reverse";
  }
  setTimeout(function() {
    basement.style.display = "none";
    doWelcomeThings(false);
  }, 1000);
}
runAway.onclick = function() {
  basement.style.animation = "fadeIn 1s linear reverse";
  basement.style.animationFillMode = "forwards";
  setTimeout(function ()
    { basement.style.display = "none";
      document.getElementById("walk-away-text").style.display = "block"; }, 1000);
  setTimeout(function() {
    document.getElementById("walk-away-text").style.animation = "fadeIn 1s linear reverse";
    document.getElementById("walk-away-text").style.animationFillMode = "forwards"; }, 7000);
  setTimeout(function() { doWelcomeThings(true); }, 8000);
}

function displayButtons(i) {
  if (i < 3) {
    next.style.display = "block";
    stay.style.display = "none";
    runAway.style.display = "none";
  }
  if (i > 0) {
    back.style.display = "block";
  }
  if (i == 0) {
    back.style.display = "none";
  }
  if (i == 3) {
    next.style.display = "none";
    stay.style.display = "block";
    runAway.style.display = "block";
  }
}
function doButtonAction(button) {
  var i;
  for (i = 0; i < text.length; i++)  {
    var displayStyle = window.getComputedStyle(text[i]).display;
    if (displayStyle == "block") {
      text[i].style.display = "none";
      if (button == next) {
        text[i + 1].style.display = "block";
        i += 1;
      } else if (button == back) {
        text[i - 1].style.display = "block";
        i -= 1;
      }
      text[i].style.animation = "fadeIn 0.5s ease-out";
      displayButtons(i);
      fadeInImage();
      return;
    }
  }
}
function fadeInImage() {
  for (image of basementItems) {
    opac = window.getComputedStyle(image).getPropertyValue("opacity");
    if (opac >= 1) {
      document.getElementById("skeleton").style.display = "block";
      document.getElementById("skeleton").style.opacity = "1";
      document.getElementById("child").style.animation = "skeletonFlicker 0.3s linear infinite";
    }
  }
}
