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