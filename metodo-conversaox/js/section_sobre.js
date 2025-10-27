function abrirVideo() {
  const videoContainer = document.getElementById('video-container');
  const thumbnail = document.querySelector('.video-thumbnail');
  videoContainer.classList.remove('d-none');
  thumbnail.style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // checa já ao carregar
});