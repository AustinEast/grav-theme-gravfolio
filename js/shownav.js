var target = 'nav';
var hideOffset = 110;
var previousScroll = window.pageYOffset;

window.onscroll = function () {
  var nav = document.getElementById(target);
  if (window.pageYOffset > hideOffset && window.pageYOffset > previousScroll) {
    nav.classList.add("nav-up");
  } else {
    nav.classList.remove("nav-up");
  }

  previousScroll = window.pageYOffset;
}

