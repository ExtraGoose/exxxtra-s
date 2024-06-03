// Главная менюшка :D
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const hidenmenu = document.querySelector('.header-hide');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('show');
});


// Чтобы уголки менюшки при нажатии изменялись
document.addEventListener('DOMContentLoaded', function() {
    var menuBtn = document.querySelector('.menu-btn');
    
    menuBtn.addEventListener('click', function() {
        if (!menuBtn.classList.contains('active')) {
            menuBtn.classList.add('active');
        } else {
            menuBtn.classList.remove('active');
        }
    });
});


// Чтобы при открытии меню раскрывались подробности сайта
const toggleButton = document.getElementById('toggleButton');
const targetDiv = document.getElementById('targetDiv');

toggleButton.addEventListener('click', function() {
  if (targetDiv.style.display === 'none' || targetDiv.style.display === '') {
    targetDiv.style.display = 'block';
  } else {
    targetDiv.style.display = 'none';
  }
});

const toggleButton2 = document.getElementById('toggleButton');
const targetDiv2 = document.getElementById('targetDiv2');

toggleButton.addEventListener('click', function() {
  if (targetDiv2.style.display === 'none' || targetDiv2.style.display === '') {
    targetDiv2.style.display = 'block';
  } else {
    targetDiv2.style.display = 'none';
  }
});


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

//Кнопка вывода поля "почта" при клике

