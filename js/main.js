/* Elias Travel and Tour — site scripts */
(function () {
  "use strict";

  // Mobile navigation
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("open");
      var open = nav.classList.contains("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") nav.classList.remove("open");
    });
  }

  // Sticky header shadow + back-to-top
  var header = document.querySelector(".site-header");
  var toTop = document.querySelector(".to-top");
  function onScroll() {
    if (header) header.classList.toggle("scrolled", window.scrollY > 8);
    if (toTop) toTop.classList.toggle("show", window.scrollY > 600);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Contact form -> opens the visitor's email app (no backend needed)
  var form = document.querySelector("form.cform");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var msg = document.querySelector(".form-msg");
      if (msg) { msg.style.display = "block"; }
      // TODO: replace with the real business email address
      var to = "hello@eliastraveltour.com";
      var d = new FormData(form);
      var subject = "Website enquiry: " + (d.get("service") || "general");
      var body =
        "Name: " + (d.get("name") || "-") + "\n" +
        "Email: " + (d.get("email") || "-") + "\n" +
        "Phone: " + (d.get("phone") || "-") + "\n" +
        "Interested in: " + (d.get("service") || "-") + "\n" +
        "Dates & group: " + (d.get("dates") || "-") + "\n\n" +
        (d.get("message") || "");
      window.location.href =
        "mailto:" + to +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
      form.reset();
    });
  }
})();
