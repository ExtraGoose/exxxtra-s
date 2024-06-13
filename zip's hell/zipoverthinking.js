// РАЗНЫЕ ЦВЕТА СТРАНИЦЫ ПОСЛЕ ПЕРЕЗАГРУЗКИ
const colors = ['red', 'cyan', 'lime', 'fuchsia', 'coral', 'gold', 'white'];
let currentIndex = localStorage.getItem('colorIndex') ? parseInt(localStorage.getItem('colorIndex')) : 0;
document.body.style.backgroundColor = colors[currentIndex];
currentIndex = (currentIndex + 1) % colors.length;
localStorage.setItem('colorIndex', currentIndex);

// Получаем цвет заднего фона
const backgroundColor = window.getComputedStyle(document.body).backgroundColor;

// Проверяем, является ли цвет белым
if (backgroundColor === 'rgb(255, 255, 255)' || backgroundColor === '#ffffff' || backgroundColor === 'white') {
    const whiteTextBlock = document.querySelector('.white-only-text');
    if (whiteTextBlock) {
        whiteTextBlock.style.display = 'block';
    }
}


const rightedallbtn = document.getElementById('rightedallbtn');
const rightedall = document.getElementById('alt-rightedall');

rightedallbtn.addEventListener('click', () => {
    rightedall.classList.toggle('active');
});




// Генерация случайного цвета в формате HEX
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16); 
}

// Получаем случайный цвет
const randomColor = getRandomColor();

// Применяем случайный цвет к элементу с id "alt-rightedall"
const element = document.getElementById('alt-rightedall');
if (element) {
    element.style.backgroundColor = randomColor;
}




// Генерация случайного цвета в формате HEX
function getRandomColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16); 
}

// Получаем элементы с классами "header-block", "main-block" и "footer-block"
const elements = document.querySelectorAll('.header-block, .main-block, .footer-block');

// Применяем случайный цвет фона к каждому элементу
elements.forEach(element => {
    const randomColor = getRandomColor();
    element.style.backgroundColor = randomColor;
});

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Счетчик времени
let seconds = 0;
setInterval(() => {
    seconds++;
    document.getElementById('timer').innerHTML = seconds + " чсв фишек";
}, 1000);






// Русский алфавит
const russianAlphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя1234567890[]\';/.`!@#$%^&*()_+=-qwertyuiopasdfghjklzxcvbnm<>?';

// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайного слова из русских букв
function generateRandomWord() {
    const wordLength = getRandomNumber(2, 15); // Генерируем случайную длину слова от 2 до 15
    let word = '';
    for (let i = 0; i < wordLength; i++) {
        const randomIndex = getRandomNumber(0, russianAlphabet.length - 1);
        word += russianAlphabet.charAt(randomIndex);
    }
    return word;
}

// Функция для генерации случайного предложения из случайных слов
function generateRandomSentence() {
    const sentenceLength = getRandomNumber(3, 10); // Генерируем случайную длину предложения от 3 до 10 слов
    let sentence = '';
    for (let i = 0; i < sentenceLength; i++) {
        sentence += generateRandomWord() + ' ';
    }
    return sentence;
}

let randomTime = getRandomNumber(3660, 66533); // 1 минута в миллисекундах до 20 лет в миллисекундах
const intervalId = setInterval(() => {
    if (seconds >= randomTime / 500) {
        clearInterval(intervalId); // Останавливаем интервал при достижении случайного времени
        return;
    }

    const randomSentence = generateRandomSentence();
    const randomSize = getRandomNumber(5, 30) + 'px'; // Случайный размер текста от 5px до 30px
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16); // Случайный цвет текста
    const randomLetterSpacing = getRandomNumber(-5, 5) + 'px'; // Случайный промежуток между буквами
    const sentenceElement = document.createElement('p');
    sentenceElement.textContent = randomSentence;
    sentenceElement.style.fontSize = randomSize;
    sentenceElement.style.color = randomColor;
    sentenceElement.style.letterSpacing = randomLetterSpacing;
    document.getElementById('randomSentences').appendChild(sentenceElement);

    seconds++;
    document.getElementById('countdownTimer').textContent = `Time left: ${Math.ceil((randomTime / 500) - seconds)} seconds`;
}, 240);





    const images = document.querySelectorAll('.image');

    images.forEach(image => {
        image.addEventListener('animationiteration', () => {
            const angle = Math.floor(Math.random() * 360);
            image.style.transform = `rotate(${angle}deg)`;
        });
    });



    const image2 = document.getElementById('image2');

    setInterval(function() {
        if (image2.style.opacity === '0') {
            image2.style.opacity = '1';
        } else {
            image2.style.opacity = '0';
        }
    }, 300);



    function playSound() {
        var audio = document.getElementById('audio');
        audio.play();
    }


    document.addEventListener('DOMContentLoaded', function() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'block';
    });

    function closeOverlay() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';
    }