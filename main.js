const card = document.getElementById("card-helena");

function spawnHeart(x, y) {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.textContent = "❤️";

    const offsetX = Math.random() * 40 - 20;
    const offsetY = Math.random() * 40 - 20;

    heart.style.left = `${x + offsetX}px`;
    heart.style.top = `${y + offsetY}px`;

    card.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 1000);
}

card.addEventListener("click", function (e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            spawnHeart(x, y);
        }, i * 150); // espaçamento entre corações
    }
});