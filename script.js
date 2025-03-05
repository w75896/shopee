let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.querySelector('.under'); // Updated to select .under container

document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.search-button').click();
    }
});
document.querySelector('.search-button').addEventListener('click', function () {
    const searchValue = document.querySelector('.search-input').value;
    console.log(searchValue);
    window.location.href = `https://shopee.tw/search?keyword=${searchValue}`;
});

// 隨機產生橘子（替換成SVG圖形）
function createOrange() {
    const orange = document.createElement('div');
    orange.classList.add('orange');
    orange.style.left = `${Math.random() * (gameArea.offsetWidth - 50)}px`;

    // 隨機選擇橘子圖片
    const bugImages = [
        { src: 'bug1.png', size: 80 },
        { src: 'bug2.png', size: 80 },
        { src: 'bug4.png', size: 120 }
    ];
    const randomImage = bugImages[Math.floor(Math.random() * bugImages.length)];
    orange.style.backgroundImage = `url('./bug/${randomImage.src}')`;
    orange.style.backgroundSize = 'cover';
    orange.style.width = `${randomImage.size}px`;
    orange.style.height = `${randomImage.size}px`;

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
setInterval(createOrange, 1200); // 每3秒創建一顆橘子
