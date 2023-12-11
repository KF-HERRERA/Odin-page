/* Fixed class scroll function */
document.addEventListener("DOMContentLoaded", function () {
    var miDiv = document.getElementById("fixed");
    var divOriginalTop = miDiv.offsetTop;

    function handleScroll() {
      var scrollPos = window.scrollY;

      if (scrollPos > divOriginalTop + 520) {
        miDiv.classList.add("cnt-style");

      } else {
        miDiv.classList.remove("cnt-style");

      }
    }

    window.addEventListener("scroll", handleScroll);
  });

document.querySelector(".bars_menu").addEventListener("click", animateBars);

var line1_bars = document.querySelector(".line1-bars-menu");
var line2_bars = document.querySelector(".line2-bars-menu");
var line3_bars = document.querySelector(".line3-bars-menu");
// var despleg = document.getElementById("active");

function animateBars() {
    line1_bars.classList.toggle("activeline1-bars-menu");
    line2_bars.classList.toggle("activeline2-bars-menu");
    line3_bars.classList.toggle("activeline3-bars-menu");
    // despleg.classList.toggle("active-fixed");

}
