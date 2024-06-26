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








const openBtn = document.querySelector('.work-block-colormark');
const popupwindowbtn = document.querySelector('#popupwindowbtn');
const popup = document.querySelector('#popup');

if (openBtn && popupwindowbtn && popup) {
  openBtn.addEventListener('click', () => {
    popup.style.display = 'block';
  });

  popupwindowbtn.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}

  

const zipimager = document.getElementById('zip-image');
const zipimagechanger = document.getElementById('zip-image-change');

if (zipimager && zipimagechanger) {
  zipimagechanger.addEventListener('click', () => {
    if (zipimager.src.includes('nsfw-ziploosinghermind.png')) {
      zipimager.src = 'sfw-ziploosinghermind.png';
    } else {
      zipimager.src = 'nsfw-ziploosinghermind.png';
    }
  });
}



document.querySelector('.btn-that-hunt-devils').addEventListener('click', function() {
  var zovichokImg = document.querySelector('.zovichok-meet140');
  var neromyImg = document.querySelector('.neromybeloved-img');
  var neromyImg2 = document.querySelector('.neromybeloved2-img');
  
  if (zovichokImg.style.display === 'none') {
      zovichokImg.style.display = 'block';
      neromyImg.style.display = 'none';
      neromyImg2.style.display = 'none';
      document.querySelector('.btn-that-hunt-devils').style.display = 'none';
      document.querySelector('.main-up-second-lowerbottom').style.display = 'none';
      document.querySelector('.upper-text-above-nero').style.display = 'none';
      document.querySelector('.upperarrowup-img').style.display = 'block';
      document.querySelector('.main-bottom-secret-text').style.display = 'block';
      document.querySelector('.main-bottom-text').style.display = 'none';
  }
});





document.addEventListener('DOMContentLoaded', function() {
  const imgFirst = document.querySelector('.zovichok-meet140');
  const imgMid = document.querySelector('.zovichok-meet140-mid');
  const imgHigh = document.querySelector('.zovichok-meet140-high');
  
  let clickable = true;
  let clickableHigh = true;
  
  imgFirst.addEventListener('click', function() {
      if (clickable) {
          imgFirst.style.display = 'none';
          imgMid.style.display = 'block';
          clickable = false;
          setTimeout(function() {
              clickable = true;
          }, 200);
      }
  });
  
  imgMid.addEventListener('click', function() {
      if (clickable) {
          imgMid.style.display = 'none';
          imgHigh.style.display = 'block';
          clickable = false;
          setTimeout(function() {
              clickable = true;
          }, 200);
      }
  });
  
  imgHigh.addEventListener('click', function() {
      if (clickableHigh) {
          clickableHigh = false;
          setTimeout(function() {
              document.body.style.backgroundColor = 'red';
              document.body.style.transform = 'scaleX(-1)';
              
              // Вращение body от 5 до 30 раз
              const rotationCount = getRandomIntInRange(5, 30);
              rotateBody(document.body, rotationCount);
              
              const audio = new Audio('strange-metalsmashing-intro-loud.mp3');
              audio.play();
              setTimeout(function() {
                  window.location.href = 'time machine/substain.html';
              }, 1500);
          });
      }
  });
});

function getRandomInt(max) {
return Math.floor(Math.random() * Math.floor(max));
}

function getRandomIntInRange(min, max) {
return Math.floor(Math.random() * (max - min + 1) + min);
}

function rotateBody(element, times) {
let currentTimes = 0;
let interval = setInterval(function() {
  element.style.transition = 'transform 0.1s';
  element.style.transform = `rotate(${getRandomInt(360)}deg)`;
  currentTimes++;
  if (currentTimes === times) {
    clearInterval(interval);
  }
}, 1000);
}