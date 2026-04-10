// Nav scroll effect
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });
}

function closeMenu() {
  if (hamburger) hamburger.classList.remove('open');
  if (mobileMenu) mobileMenu.classList.remove('open');
}

// Tab switching (menu.html)
function showTab(name) {
  const sections = document.querySelectorAll('.menu-section');
  const tabs = document.querySelectorAll('.tab-btn');
  
  if (sections.length === 0) return; // Prevent error if not on menu page
  
  sections.forEach(s => s.classList.remove('active'));
  tabs.forEach(b => b.classList.remove('active'));
  
  const target = document.getElementById('tab-' + name);
  if (target) {
    target.classList.add('active');
  }
  if (event && event.currentTarget) {
    event.currentTarget.classList.add('active');
  }
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { 
    if (e.isIntersecting) { 
      e.target.classList.add('visible'); 
      // stop observing once visible to run animation only once
      observer.unobserve(e.target);
    } 
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
