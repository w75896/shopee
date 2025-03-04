let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('game-area');

// 隨機產生橘子
function createOrange() {
    const orange = document.createElement('div');
    orange.classList.add('orange');
    orange.style.left = `${Math.random() * (gameArea.offsetWidth - 50)}px`;
    gameArea.appendChild(orange);

    // 讓橘子掉落
    let dropSpeed = Math.random() * 3 + 2; // 隨機下落速度
    let orangePosition = 0;

    const dropInterval = setInterval(() => {
        orangePosition += dropSpeed;
        orange.style.top = `${orangePosition}px`;

        // 橘子碰到底部時消失並扣分
        if (orangePosition >= gameArea.offsetHeight - 50) {
            clearInterval(dropInterval);
            gameArea.removeChild(orange);
            updateScore(-1);
        }
    }, 20);

    // 玩家點擊橘子加分
    orange.addEventListener('click', () => {
        clearInterval(dropInterval);
        gameArea.removeChild(orange);
        updateScore(1);
    });
}

// 更新分數
function updateScore(points) {
    score += points;
    if(score<0){
        score=0;
    }
    scoreElement.textContent = score;
}

// 讓橘子隨機掉落
setInterval(createOrange, 5000); // 每秒創建一顆橘子
