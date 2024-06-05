
  document.addEventListener('DOMContentLoaded', (event) => {
    const headerBg = document.querySelector('.header-bg');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        headerBg.classList.add('scrolled');
      } else {
        // Scrolling up
        headerBg.classList.remove('scrolled');
      }
      lastScrollY = window.scrollY;
    });
  });

