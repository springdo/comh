(function () {
  var STORAGE_KEY = "comh_preview";
  var PASSWORD = "mickey-mouse";

  function unlock() {
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch (e) {}
    document.documentElement.classList.add("preview-unlocked");
    var gate = document.getElementById("gate");
    if (gate) {
      gate.setAttribute("aria-hidden", "true");
    }
    var input = document.getElementById("gate-password");
    if (input) {
      input.blur();
    }
  }

  function initGate() {
    var form = document.getElementById("gate-form");
    var input = document.getElementById("gate-password");
    var err = document.getElementById("gate-error");
    if (!form || !input) {
      return;
    }

    if (document.documentElement.classList.contains("preview-unlocked")) {
      return;
    }

    input.focus();

    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      if (err) {
        err.hidden = true;
        err.textContent = "";
      }
      if (input.value.trim() === PASSWORD) {
        unlock();
        return;
      }
      if (err) {
        err.hidden = false;
        err.textContent = "That password is not correct. Try again.";
      }
      input.select();
    });
  }

  function initGrid() {
    var grid = document.getElementById("letter-grid");
    if (
      !grid ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    grid.classList.add("is-interactive");
  }

  initGate();
  initGrid();
})();
