let power = 100;
let currentCamera = 1;

function changeCamera(cameraNumber) {
    if (power > 0) {
        currentCamera = cameraNumber;
        document.getElementById('camera-image').src = `camera${cameraNumber}.jpg`;
        reducePower();
    }
}

function reducePower() {
    power -= 10;
    document.getElementById('power').textContent = power + '%';

    if (power <= 0) {
        gameOver();
    }
}

function gameOver() {
    alert('Game Over! You ran out of power.');
    // Here, you can reset the game or do something else
    power = 100;
    document.getElementById('power').textContent = power + '%';
}
