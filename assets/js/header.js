/* RANDYANTHONY.US
   Shared Header Loader
   Loads /includes/header.html into pages
*/

document.addEventListener("DOMContentLoaded", function () {

  fetch("/includes/header.html")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("Header file not found");
      }
      return response.text();
    })
    .then(function(data) {
      var headerTarget = document.getElementById("site-header");

      if (!headerTarget) return;

      headerTarget.innerHTML = data;

      var btn = document.getElementById("mobileToggle");
      var nav = document.getElementById("mobileNav");

      if (btn && nav) {
        btn.addEventListener("click", function () {
          var open = nav.classList.toggle("show");
          btn.setAttribute("aria-expanded", String(open));
          nav.setAttribute("aria-hidden", String(!open));
          btn.textContent = open ? "✕" : "☰";
        });
      }
    })
    .catch(function(error) {
      console.error("Header load failed:", error);
    });

});
