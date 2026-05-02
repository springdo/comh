(function () {
  var grid = document.getElementById("letter-grid");
  if (!grid || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }
  grid.classList.add("is-interactive");
})();
