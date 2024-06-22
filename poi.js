const pointOfInterest = document.querySelector('.point-of-interest');
    const pointOfInterestMsg = document.querySelector('.point-of-interest-msg');
    const pointOfInterestPolotno = document.querySelector('.point-of-interest-polotno');

    pointOfInterest.addEventListener('click', () => {
        pointOfInterestMsg.style.display = 'block';
        pointOfInterestPolotno.style.display = 'block';
    });

    pointOfInterestMsg.addEventListener('click', () => {
        pointOfInterestMsg.style.display = 'none';
        pointOfInterestPolotno.style.display = 'none';
    });