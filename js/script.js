const noBtn = document.getElementById('no-btn');

    function getRandomPosition() {
        const offsetX = (Math.random() * (window.innerWidth/2 - noBtn.clientWidth));
        const offsetY = (Math.random() * (window.innerHeight/2 - noBtn.clientHeight));
        return { x: offsetX, y: offsetY };
    }

    noBtn.addEventListener('mouseover', () => {
        const newPosition = getRandomPosition();
        noBtn.style.transform = `translate(${newPosition.x}px, ${newPosition.y}px)`;
    });