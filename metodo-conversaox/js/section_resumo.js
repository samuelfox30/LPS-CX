document.addEventListener("DOMContentLoaded", function () {
  const scrollQuote = document.querySelector('.scroll-quote');

  function revealQuote() {
    if (!scrollQuote) return;
    const rect = scrollQuote.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.8) {
      scrollQuote.classList.add('visible');
      window.removeEventListener('scroll', revealQuote);
    }
  }

  window.addEventListener('scroll', revealQuote);
  revealQuote();
});