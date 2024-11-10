
// function createRandomTriangle() {
//     // Создаем элемент div для треугольника
//     const triangle = document.createElement('div');
//     triangle.style.width = '0';
//     triangle.style.height = '0';
//     triangle.style.borderLeft = `${getRandomNumber(50, 200)}px solid transparent`;
//     triangle.style.borderRight = `${getRandomNumber(50, 200)}px solid transparent`;
//     triangle.style.borderBottom = `${getRandomNumber(50, 200)}px solid ${getRandomColor()}`;
//     triangle.style.position = 'fixed';
//     triangle.style.left = `${getRandomNumber(0, window.innerWidth - 200)}px`;
//     triangle.style.top = `${getRandomNumber(0, window.innerHeight - 200)}px`;
//     triangle.style.opacity = '0.1'; // Прозрачность 90%

//     // Добавляем треугольник на страницу
//     document.body.appendChild(triangle);

//     // Устанавливаем таймер для удаления треугольника через 10 секунд
//     setTimeout(() => {
//         triangle.remove();
//     }, 300); // Удаляем через 10 секунд
// }

// function getRandomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function getRandomColor() {
//     return `rgb(${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)}, ${getRandomNumber(0, 255)})`;
// }

// // Создаем новый треугольник каждую минуту
// setInterval(createRandomTriangle, 100); // каждые 60 секунд





function toggleBlocksShowAndDown() {
    const blocks = document.querySelectorAll('.block-to-showanddown');
    
    blocks.forEach(block => {
        if (block.style.display === 'none') {
            block.style.display = 'block';
            block.classList.remove('fade-out');
            block.classList.add('fade-in');
        } else {
            block.classList.remove('fade-in');
            block.classList.add('fade-out');
            setTimeout(() => {
                block.style.display = 'none';
            }, 1000); // 0.5s, соответствует времени анимации
        }
    });
}