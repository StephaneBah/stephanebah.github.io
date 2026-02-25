// ============================================
// PORTFOLIO SCRIPT - stephanebah.github.io
// ============================================

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navMenu   = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 68;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Navbar: add scrolled class + shadow
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });
}

// Fade-up Intersection Observer
if ('IntersectionObserver' in window) {
  const fadeObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  // Observe static .fade-up elements (dynamic ones registered by content-loader)
  document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));

  // Re-observe after dynamic content is injected (content-loader calls this)
  window._registerFadeUp = el => fadeObserver.observe(el);
}

// Console easter egg
console.log('%c Salut! Tu es curieux du code?', 'color:#1a56db;font-size:16px;font-weight:bold;');
console.log('%cContacte-moi: stephanebah083@gmail.com', 'color:#059669;font-size:13px;');