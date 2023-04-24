"use strict";
let helpme = "ans=level3";
document.querySelector(".click-1").addEventListener("click", click1);
document.querySelector(".click-2").addEventListener("click", click2);

function click1() {
    document.querySelector(".click-1").classList.add("hidden");
    document.querySelector(".click-2").classList.remove("hidden");
}
function click2() {
    document.querySelector(".click-1").classList.remove("hidden");
    document.querySelector(".click-2").classList.add("hidden");
}
// let audio1 = new Audio("audio1.mp3");
// let audio2 = new Audio("audio2.mp3");
// audio1.play();
// audio2.play();
// audio2.loop = true;
// audio2.autoplay = true;
