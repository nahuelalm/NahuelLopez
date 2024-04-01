document.getElementById('themeToggle').addEventListener('change', function () {
  if (!this.checked) {
    document.body.classList.add('theme-dark');
    document.body.classList.remove('theme-light');
  } else {
    document.body.classList.add('theme-light');
    document.body.classList.remove('theme-dark');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.querySelector('#sun-icon');
  const moonIcon = document.querySelector('#moon-icon');

  // Invertir los estados iniciales de los iconos
  sunIcon.classList.add('hidden');
  moonIcon.classList.remove('hidden');

  // Agregar un event listener para detectar cambios en el interruptor
  themeToggle.addEventListener('change', function () {
    if (!themeToggle.checked) {
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


