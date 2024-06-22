/* ЗАКРЫТИЕ 1-Й МЕНЮШКИ */
document.querySelector('.newview-next-button').addEventListener('click', function() {
    document.querySelector('.newview').style.display = 'none';
    document.querySelector('.newview-2').style.display = 'flex';

});

/* ПОЛНОЕ ЗАКРЫТИЕ (и полупрозрачного полотна тоже)*/
document.querySelector('.newview-button').addEventListener('click', function() {
    document.querySelector('.newview-3').style.display = 'none';
    document.querySelector('.newview-polotno').style.display = 'none';

});

/* ЗАКРЫТИЕ 2-Й МЕНЮШКИ */
document.querySelector('.newview-next-next-button').addEventListener('click', function() {
    document.querySelector('.newview-2').style.display = 'none';
    document.querySelector('.newview-3').style.display = 'flex';

});

// document.querySelector('.newview-footer').style.display = 'flex';


function createSnowflake() {
    const snowflake = document.createElement('span');
    snowflake.innerHTML = '*';
    snowflake.classList.add('snowflake');
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000);
}

setInterval(createSnowflake, 300);






const timerDisplay = document.getElementById('timer');
const footerBlock = document.querySelector('.newview-footer');
const timerFooterBlock = document.querySelector('.newview-footer-timer');
const startButton = document.querySelector('.newview-button');
let timeLeft = 30;

function startTimer() {
    const countdown = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(countdown);
            footerBlock.style.display = 'flex';
            timerFooterBlock.style.display = 'none';
        }
    }, 1000); // уменьшает каждую секунду
}

startButton.addEventListener('click', startTimer);