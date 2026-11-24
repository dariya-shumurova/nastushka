
const envelope = document.getElementById("envelope");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");
const heading = document.getElementById("heading");
const buttons = document.getElementById("buttons");
const hearts = document.getElementById("hearts");

let opened = false;

function openLetter() {
    if (opened) return;

    opened = true;
    envelope.classList.add("open");

    heading.innerHTML = "you have a special message!";
    message.innerHTML = "сасал?";

    buttons.style.display = "none";

    
    for (let i = 0; i < 35; i++) {
        setTimeout(() => {
            const heart = document.createElement("div");

            heart.classList.add("floating-heart");
            heart.innerHTML = ["♥", "♡", "💗", "💕"][
                Math.floor(Math.random() * 4)
            ];

            heart.style.left = Math.random() * 100 + "vw";
            heart.style.animationDuration =
                (3 + Math.random() * 3) + "s";

            heart.style.fontSize =
                (15 + Math.random() * 20) + "px";

            hearts.appendChild(heart);

            setTimeout(() => heart.remove(), 6000);
        }, i * 100);
    }
}

yes.addEventListener("click", openLetter);
envelope.addEventListener("click", openLetter);

no.addEventListener("click", () => {
    message.innerHTML = "нюхай бебру";

    no.style.transform = "rotate(-10deg)";
    setTimeout(() => {
        no.style.transform = "";
    }, 300);
});
