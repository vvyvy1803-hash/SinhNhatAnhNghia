function showLove() {

    document.getElementById("message").innerHTML =
    "❤️ Chúc anh Nghĩa tuổi mới thật nhiều niềm vui, luôn mạnh khỏe và luôn hạnh phúc. Cảm ơn anh vì đã đến bên em ❤️";

    let music = document.getElementById("music");
    music.play();

}

setInterval(function(){
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";

    document.body.appendChild(heart);

    setTimeout(function(){
        heart.remove();
    }, 5000);

}, 500);