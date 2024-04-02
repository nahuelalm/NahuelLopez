document.addEventListener('DOMContentLoaded', function () {
  const themeToggle = document.getElementById('themeToggle');
  const sunIcon = document.querySelector('#sun-icon');
  const moonIcon = document.querySelector('#moon-icon');

  // Función para actualizar el tema y los iconos
  function updateTheme(isDarkMode) {
    if (isDarkMode) {
      document.body.classList.add('theme-dark');
      document.body.classList.remove('theme-light');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.body.classList.add('theme-light');
      document.body.classList.remove('theme-dark');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  }

  // Verificar si hay un estado almacenado previamente
  const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
  themeToggle.checked = isDarkMode;
  updateTheme(isDarkMode);

  // Agregar un event listener para detectar cambios en el interruptor
  themeToggle.addEventListener('click', function () {
    const isDarkMode = themeToggle.checked;
    localStorage.setItem('isDarkMode', isDarkMode);
    updateTheme(isDarkMode);
  });

  // Restaurar el tema al cambiar de página
  window.addEventListener('load', function () {
    const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
    updateTheme(isDarkMode);
  });
});
