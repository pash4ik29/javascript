const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
/*handleKeyPress реагирует на определленные 
нажатия клавиш, обновляя позицию  */
function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position = position - 10;
    }
    if (e.code === 'ArrowRight') {
        position = position + 10;
    }
    if (position < 0) {
        position = 0;
    }
    refresh() //обновляет положение мяча
}
function refresh() {
    ball.style.left = position + 'px';
}