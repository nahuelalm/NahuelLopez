 // Función para animar los elementos cuando entran en el viewport
 function animateOnScroll(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated-on-scroll');
        observer.unobserve(entry.target);
      }
    });
  }

  // Configurar IntersectionObserver
  const observer = new IntersectionObserver(animateOnScroll, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5 // Cambiar según sea necesario
  });

  // Seleccionar los elementos que deseas animar
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  // Observar cada elemento para animarlos cuando entran en el viewport
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });