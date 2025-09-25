// ===== Header Hide/Show =====
const header = document.querySelector("header");
let lastScroll = window.scrollY || 0;
let ticking = false;
const THRESHOLD = 12;

// Scroll handler
function handleScroll() {
  const currentScroll = window.scrollY || 0;

  // Selalu tampil kalau di paling atas
  if (currentScroll <= 0) {
    header.classList.remove("header-hidden", "header-scrolled");
    lastScroll = 0;
    ticking = false;
    return;
  }

  // Tambahin shadow kalau sudah scroll turun dikit
  if (currentScroll > 20) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }

  // Cegah flicker di gerakan kecil
  if (Math.abs(currentScroll - lastScroll) <= THRESHOLD) {
    ticking = false;
    return;
  }

  // Scroll ke bawah => hide
  if (currentScroll > lastScroll) {
    header.classList.add("header-hidden");
  } 
  // Scroll ke atas => show
  else {
    header.classList.remove("header-hidden");
  }

  lastScroll = currentScroll;
  ticking = false;
}

// RequestAnimationFrame biar smooth
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(handleScroll);
    ticking = true;
  }
}, { passive: true });

// ===== Hero Button Action =====
function showAlert() {
  alert("Selamat berbelanja di Jagantara! 🌏✨ Marketplace Nusantara untukmu.");
}

// ===== Pop-up Kontak =====
const contactLink = document.querySelector(".kontak-link");
const contactPopup = document.getElementById("contactPopup");
const closeBtn = document.querySelector(".close-btn");

contactLink.addEventListener("click", (e) => {
  e.preventDefault();
  contactPopup.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  contactPopup.classList.remove("show");
});

window.addEventListener("click", (e) => {
  if (e.target === contactPopup) {
    contactPopup.classList.remove("show");
  }
});
