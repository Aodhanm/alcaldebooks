/* ============================================================
   Alcalde Books — rendering + search/filter.
   Reads the global BOOKS array from books.js. No build step,
   no dependencies. Works opened locally or deployed.
   ============================================================ */
(function () {
  "use strict";

  var grid = document.getElementById("grid");
  var countEl = document.getElementById("count");
  var qEl = document.getElementById("q");
  var chipsEl = document.getElementById("chips");
  var yearEl = document.getElementById("year");

  var subj = "all";
  var q = "";

  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function matches(b) {
    var inSubj = subj === "all"
      ? true
      : subj === "Antiquarian" ? !!b.antiquarian : b.subject === subj;
    var hay = (b.title + " " + b.author).toLowerCase();
    return inSubj && (q === "" || hay.indexOf(q) !== -1);
  }

  function cover(b) {
    var stamp = b.sold ? '<div class="sold-stamp">SOLD</div>' : "";
    if (b.img) {
      return '<div class="cover photo">' + stamp +
        '<img src="images/' + esc(b.img) + '" alt="' + esc(b.title) + '" loading="lazy"></div>';
    }
    var spine = b.spine || "#3a5a4a";
    return '<div class="cover" style="--spine:' + esc(spine) + '">' + stamp +
      '<div class="book3d">' +
        '<div class="ct">' + esc(b.title) + "</div>" +
        "<div><div class=\"rule\"></div>" +
          '<div style="display:flex;justify-content:space-between;align-items:flex-end">' +
            '<span class="ca">' + esc(b.author) + "</span>" +
            '<span class="cy">' + esc(b.year) + "</span>" +
          "</div></div>" +
      "</div></div>";
  }

  function card(b) {
    var btn = b.sold
      ? '<span class="btn disabled">Sold</span>'
      : '<a class="btn" href="' + esc(b.ebay) + '" target="_blank" rel="noopener">View on eBay <span class="arr">→</span></a>';
    return '<article class="book' + (b.sold ? " sold" : "") + '">' +
      cover(b) +
      '<div class="book-body">' +
        '<div class="subj">' + esc(b.subject) + "</div>" +
        "<h3>" + esc(b.title) + "</h3>" +
        '<p class="auth">' + esc(b.author) + "</p>" +
        '<p class="blurb">' + esc(b.blurb) + "</p>" +
        '<div class="meta"><span class="cond">' + esc(b.cond) + '</span><span class="yr">' + esc(b.year) + "</span></div>" +
        '<div class="foot"><span class="price"><span class="cur">$</span>' + esc(b.price) + "</span>" + btn + "</div>" +
      "</div></article>";
  }

  function render() {
    var list = (typeof BOOKS !== "undefined" ? BOOKS : []).filter(matches);
    grid.innerHTML = list.length
      ? list.map(card).join("")
      : '<div class="empty">No books match — try clearing the search or filter.</div>';
    var n = list.length;
    countEl.textContent = n + " " + (n === 1 ? "title" : "titles");
  }

  chipsEl.addEventListener("click", function (e) {
    var btn = e.target.closest(".chip");
    if (!btn) return;
    subj = btn.getAttribute("data-subj");
    var chips = chipsEl.querySelectorAll(".chip");
    for (var i = 0; i < chips.length; i++) {
      chips[i].setAttribute("aria-pressed", chips[i] === btn ? "true" : "false");
    }
    render();
  });

  qEl.addEventListener("input", function () {
    q = qEl.value.trim().toLowerCase();
    render();
  });

  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  render();
})();
