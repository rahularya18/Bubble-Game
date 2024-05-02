var timer = 4;
var score = 0;
var random;


var bt = document.createElement("button")
bt.textContent = "Play Again";

function increaseScore() {
    document.querySelector("#scoreval").textContent = score;
    score += 10;
    finalScore = score;
    console.log(finalScore)
}

function getNewHit() {
    random = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = random;

}

function createBubble() {
    var bub = " ";
    for (var i = 1; i <= 250; i++) {
        var random = Math.floor(Math.random() * 10)
        bub += `<div class="bubble">${random}</div>`;
    }
    document.querySelector("#tb").innerHTML = bub;
}

function runtimer() {
    var timerinterval = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#time").textContent = timer;
        }
        else {
            clearInterval(timerinterval);
            document.querySelector("#tb").innerHTML = `<h1>Game Over </h1>`;
            document.querySelector("#tb").innerHTML = `<h2>Your Score is : ${finalScore - 10}</h2>`;
            document.querySelector("#tb").appendChild(bt);
            // console.log(dets.target.textContent);
        }
    }, 1000)
}

document.querySelector("#tb").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);

    if (clickednum === random) {
        increaseScore();
        createBubble();
        getNewHit();
    }
})

runtimer();
createBubble();
getNewHit();
increaseScore();

function restartGame() {
    timer = 10;
    score = 0;
    finalScore = 0;

    document.querySelector("#time").textContent = timer;
    document.querySelector("#scoreval").textContent = score;

    createBubble();
    getNewHit();
    runtimer();
    increaseScore();
}
bt.addEventListener("click", restartGame);