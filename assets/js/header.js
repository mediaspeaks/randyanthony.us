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

      if (headerTarget) {
        headerTarget.innerHTML = data;
      }

    })
    .catch(function(error) {

      console.error("Header load failed:", error);

    });

});
