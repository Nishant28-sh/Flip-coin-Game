const flipButton = document.getElementById('flipButton');
const coin = document.getElementById('coin');
const result = document.getElementById('result');

flipButton.addEventListener('click', flipCoin);

function flipCoin() {
    // Reset result
    result.textContent = '';

    // Start flipping animation
    coin.style.transform = 'rotateY(0)';
    setTimeout(() => {
        const isHeads = Math.random() < 0.5;

        if (isHeads) {
            coin.style.transform = 'rotateY(1800deg)';
            setTimeout(() => result.textContent = 'Heads!', 1000);
        } else {
            coin.style.transform = 'rotateY(1620deg)';
            setTimeout(() => result.textContent = 'Tails!', 1000);
        }
    }, 100);
}