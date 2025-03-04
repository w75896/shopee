let score = 0;
const scoreElement = document.getElementById('score');
const gameArea = document.getElementById('game-area');

// 隨機產生橘子（替換成SVG圖形）
function createOrange() {
    const orange = document.createElement('div');
    orange.classList.add('orange');
    orange.style.left = `${Math.random() * (gameArea.offsetWidth - 50)}px`;
    orange.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <path d="M14 21.7101C13.3663 21.8987 12.695 22 12 22C8.13401 22 5 18.866 5 15V11.9375C5 9.76288 6.76288 8 8.9375 8H15.0625C17.2371 8 19 9.76288 19 11.9375V15C19 16.9073 18.2372 18.6364 17 19.899" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M8.25 7.5C8.25 7.08579 7.91421 6.75 7.5 6.75C7.08579 6.75 6.75 7.08579 6.75 7.5H8.25ZM7.63452 4.58281C7.40411 4.92702 7.49636 5.39285 7.84058 5.62326C8.18479 5.85367 8.65062 5.76141 8.88103 5.41719L7.63452 4.58281ZM17.25 8.5V7.5H15.75V8.5H17.25ZM6.75 7.5V8.5H8.25V7.5H6.75ZM17.25 7.5C17.25 4.60051 14.8995 2.25 12 2.25V3.75C14.0711 3.75 15.75 5.42893 15.75 7.5H17.25ZM12 2.25C10.179 2.25 8.57506 3.17771 7.63452 4.58281L8.88103 5.41719C9.55501 4.41032 10.7005 3.75 12 3.75V2.25Z" fill="#ed333b"></path>
                <path d="M19 14H22" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M5 14H2" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M14.5 3.5L17 2" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M9.5 3.5L7 2" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M20.5 20.0002L18.5 19.2002" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M20.5 7.9998L18.5 8.7998" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M3.5 20.0002L5.5 19.2002" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M3.5 7.9998L5.5 8.7998" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
                <path d="M12 21.5V15" stroke="#ed333b" stroke-width="1.5" stroke-linecap="round"></path>
            </g>
        </svg>
    `;
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
setInterval(createOrange, 1000); // 每秒創建一顆橘子
