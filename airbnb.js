let midp = document.querySelector(".middlespan");
let info = document.querySelector(".info");
let visdiv = document.querySelector(".visdiv");
let stickybar = document.querySelector(".stickybar");
let like = document.querySelectorAll(".fa-heart");
let listMoreBtn = document.querySelector(".morecircle");
let listLessBtn = document.querySelector(".lesscircle");
let flexyList = document.querySelector(".flexylist");
let map = document.querySelector(".map");
let tripDestination = document.querySelector(".tripdestination");

let scrollTop = 0;

window.addEventListener("scroll", function () {
  let amountscrollTop = window.scrollY;
  if (amountscrollTop > scrollTop) {
    midp.classList.add("hidden");
    midp.classList.add("info-translate");
    info.classList.add("hidden");
    info.classList.add("info-translate");
    visdiv.classList.remove("hidden");
    stickybar.classList.add("boxshadowdrop");
  } else {
    midp.classList.remove("hidden");
    midp.classList.remove("info-translate");
    info.classList.remove("hidden");
    info.classList.remove("info-translate");
    visdiv.classList.add("hidden");
    stickybar.classList.remove("boxshadowdrop");
  }
  amountscrollTop = scrollTop;
});

likesArray = Array.from(like);
for (let i = 0; i < likesArray.length; i++) {
  likesArray[i].addEventListener("click", function (e) {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
  });
}

let flexyListscrollX = 0;
listMoreBtn.addEventListener("click", function () {
  flexyList.scrollBy(100, 0);
  if (flexyList.scrollLeft > flexyListscrollX) {
    listLessBtn.style.display = "inline";
  }
});

listLessBtn.addEventListener("click", function () {
  flexyList.scrollBy(-100, 0);
  if (flexyList.scrollLeft <= flexyListscrollX) {
    listLessBtn.style.display = "none";
  }
});

function getTripDestinationBottom() {
  const rect = tripDestination.getBoundingClientRect();
  return rect.bottom + window.scrollY - 500;
}

window.onscroll = function () {
  let mapscrollY = getTripDestinationBottom();
  map.style.opacity = window.scrollY > mapscrollY ? "0" : "1";
};
