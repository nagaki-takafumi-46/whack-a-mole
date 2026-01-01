const holes = document.querySelectorAll('.hole');
let score = 0;
let timeLeft = 30;

function  randomHole (){
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = randomHole();
    hole.textContent = "🐶";

    hole.onclick = () => {
        score++;
        document.getElementById('score').textContent = `スコア: ${score}`;
        hole.textContent = "";
    };
    
    setTimeout(() => {
        hole.textContent = "";
        hole.onclick = null;
    }, 800);
}

const moleInterval = setInterval(showMole, 1000);

const timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').textContent = `残り時間: ${timeLeft}`;

    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert("時間切れ!ゲーム終了");
        clearInterval(moleInterval);
    }
}, 1000);    


