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
    threshold: 0.2 // Cambiar según sea necesario
  });

  // Seleccionar los elementos que deseas animar
  const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

  // Observar cada elemento para animarlos cuando entran en el viewport
  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });


document.getElementById('themeToggle').addEventListener('change', function() {
  if (this.checked) {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }
});  
document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.querySelector('#sun-icon');
  const moonIcon = document.querySelector('#moon-icon');
  
  
  // Agregar un event listener para detectar cambios en el interruptor
  themeToggle.addEventListener('change', function() {
      if (themeToggle.checked) {
          // Modo oscuro activado
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
      } else {
          // Modo claro activado
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
      }
  });
});
