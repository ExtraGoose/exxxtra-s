const decreaseBtn = document.getElementById('decrease-btn');
        const increaseBtn = document.getElementById('increase-btn');
        const text = document.querySelector('.artistic-text');

        // Function to set the initial font size or retrieve from localStorage
        function setFontSize() {
            let savedSize = localStorage.getItem('fontSize');
            if (savedSize) {
                text.style.fontSize = savedSize;
            } else {
                text.style.fontSize = '20px'; // Default font size
            }
        }

        setFontSize(); // Call the function on page load

        decreaseBtn.addEventListener('click', function() {
            let currentSize = parseInt(window.getComputedStyle(text).fontSize);
            if (currentSize > 12) {
                text.style.fontSize = (currentSize - 2) + 'px';
                localStorage.setItem('fontSize', text.style.fontSize);
            }
        });

        increaseBtn.addEventListener('click', function() {
            let currentSize = parseInt(window.getComputedStyle(text).fontSize);
            if (currentSize < 40) {
                text.style.fontSize = (currentSize + 2) + 'px';
                localStorage.setItem('fontSize', text.style.fontSize);
            }
        });








        const openBtnArt = document.querySelector('.art-info-btn');
        const popupwindowbtnArt = document.querySelector('#popupwindowbtn');
        const popupArt = document.querySelector('#popup');
      
        openBtnArt.addEventListener('click', () => {
          popupArt.style.display = 'block';
        });
      
        popupwindowbtnArt.addEventListener('click', () => {
          popupArt.style.display = 'none';
        });





        const zovichokMeet = document.querySelector('.zovichok-meet');
        const artisticText = document.querySelector('.artistic-text');
        const forbidenHtmlResource = document.querySelector('.forbiden-html-resource');
        const zovichokAudio = document.getElementById('zovichokAudio');
    
        // Появление блока zovichok-meet с шансом 15%
        if (Math.random() < 0.15) {
            zovichokMeet.style.display = 'block';
        }
    
        // Обработчик события при клике на блок zovichok-meet
        zovichokMeet.addEventListener('click', function() {
            forbidenHtmlResource.style.display = 'block';
            document.body.style.backgroundColor = 'red';
    
            // Перекрасить страницу обратно через 0.5 секунды
            setTimeout(function() {
                document.body.style.backgroundColor = '';
            }, 500);
    
            // Дрожание страницы
            document.body.style.transition = 'transform 0.1s';
            let shakeCount = 0;
            const shakeInterval = setInterval(function() {
                if (shakeCount < 50) {
                    document.body.style.transform = 'translateX(' + (Math.random() - 0.5) * 50 + 'px) ' +
                        'translateY(' + (Math.random() - 0.5) * 50 + 'px)';
                    shakeCount++;
                } else {
                    clearInterval(shakeInterval);
                    document.body.style.transform = '';
                }
            }, 10);
    
            // Прятать блок zovichok-meet после действий
            zovichokMeet.style.display = 'none';
    
            // Дополнительное дрожание и переворачивание текста с классом "artistic-text"
            artisticText.style.transition = 'transform 0.1s';
            artisticText.style.transform = 'rotate(180deg)';
            setTimeout(function() {
                artisticText.style.transform = 'rotate(0deg)';
            }, 500);
    
            // Воспроизведение звука
            zovichokAudio.play();
        });