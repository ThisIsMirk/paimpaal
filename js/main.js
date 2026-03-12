// ===== WhatsApp Integration =====
const WHATSAPP_NUMBER = "91XXXXXXXXXX"; // TODO: Replace with uncle's actual number

function openWhatsApp(product, message) {
  const text = encodeURIComponent(
    message || "Hi! I'm interested in " + product + " from Paimpaal."
  );
  window.open("https://wa.me/" + WHATSAPP_NUMBER + "?text=" + text, "_blank");
}

// ===== Mobile Nav Toggle =====
document.addEventListener("DOMContentLoaded", function () {
  var hamburger = document.querySelector(".header__hamburger");
  var nav = document.querySelector(".header__nav");

  if (hamburger && nav) {
    hamburger.addEventListener("click", function () {
      hamburger.classList.toggle("active");
      nav.classList.toggle("active");
    });

    // Close nav when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        hamburger.classList.remove("active");
        nav.classList.remove("active");
      });
    });
  }

  // ===== Active Nav Link =====
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".header__nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  // ===== Lightbox =====
  var lightbox = document.querySelector(".lightbox");
  if (lightbox) {
    var lightboxImg = lightbox.querySelector("img");
    var lightboxClose = lightbox.querySelector(".lightbox__close");

    document.querySelectorAll("[data-lightbox]").forEach(function (img) {
      img.addEventListener("click", function () {
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        lightbox.classList.add("active");
      });
    });

    lightboxClose.addEventListener("click", function () {
      lightbox.classList.remove("active");
    });

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove("active");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && lightbox.classList.contains("active")) {
        lightbox.classList.remove("active");
      }
    });
  }
});
