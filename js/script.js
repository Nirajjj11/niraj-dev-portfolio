

// AOS

AOS.init({
      duration: 1500,
      once: true
});

// Typed Text

new Typed('.typing', {

      strings: [
            'Django Developer',
            'MERN Developer',
            'Backend Engineer',
            'Python Developer',
            'ML Engineer',
      ],

      typeSpeed: 70,
      backSpeed: 50,
      loop: true

});

// Cursor Glow

const glow = document.querySelector('.cursor-glow');

window.addEventListener('mousemove', (e) => {

      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';

});

// Navbar Scroll

window.addEventListener('scroll', () => {

      const nav = document.querySelector('.navbar');

      if (window.scrollY > 50) {

            nav.style.background = '#020b18';

      } else {

            nav.style.background = 'rgba(3,17,38,0.6)';
      }

});

