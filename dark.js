// тёмная тема
function toggleDarkMode() {
    var stylesheet = document.getElementById('styleSheet');
    
    if (stylesheet.getAttribute('href') === 'colorsmain.css') {
        stylesheet.setAttribute('href', 'colorsdark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        stylesheet.setAttribute('href', 'colorsmain.css');
        localStorage.setItem('theme', 'light');
    }
  }
  
  
  
  function toggleDarkMode2() {
    var stylesheet = document.getElementById('styleSheet');
    var mode = localStorage.getItem('theme');
  
    if (mode === 'dark') {
        stylesheet.setAttribute('href', 'colorsdark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        stylesheet.setAttribute('href', 'colorsmain.css');
        localStorage.setItem('theme', 'light');
    }
  }
  
  // Проверка сохранённой темы при загрузке страницы
  window.onload = function() {
    var mode = localStorage.getItem('theme');
    if (mode === 'dark') {
        var stylesheet = document.getElementById('styleSheet');
        stylesheet.setAttribute('href', 'colorsdark.css');
    }
  };
  