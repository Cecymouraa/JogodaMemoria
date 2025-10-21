const emojis = [
    "💵", "💵",
    "😨", "😨",
    "😡", "😡",
    "🤡", "🤡",
    "🐱", "🐱",
    "🦝", "🦝",
    "❤️", "❤️",
    "😒", "😒"
];

let openCard = [];
let lives = 10;

let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

for (let i = 0; i < shuffledEmojis.length; i++) {
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffledEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}

function updateLives() {
    const livesDisplay = document.getElementById("lives");
    livesDisplay.textContent = "Vidas: " + "❤️".repeat(lives);
}

function handleClick() {
    if (openCard.length < 2 && !this.classList.contains("boxMatch")) {
        this.classList.add("boxOpen");
        openCard.push(this);
    }

    if (openCard.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCard[0].innerHTML === openCard[1].innerHTML) {
        openCard[0].classList.add("boxMatch");
        openCard[1].classList.add("boxMatch");
    } else {
        
        lives--;
        updateLives();

        openCard[0].classList.remove("boxOpen");
        openCard[1].classList.remove("boxOpen");

        
        if (lives === 0) {
            alert("Você perdeu, amore!");
            window.location.reload();
            return;
        }
    }

    openCard = [];

    // condição de vitória
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
        alert("Você DIVOU! ");
    }
}

// mostra as vidas iniciais
updateLives();
