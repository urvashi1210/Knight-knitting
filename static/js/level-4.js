"use strict";
let ans;
document.querySelector("area").addEventListener("click", click);

function feedme() {
    ans = prompt("saw the clue? if not, then you are : ");
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/4", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({ ans }));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                window.location.reload();
            }
        };
    }
}
function click() {
    document.querySelector(".img1 ").classList.add("hidden");

    document.querySelector(".img2").classList.remove("hidden");

    feedme();
}
