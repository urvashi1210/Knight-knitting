"use strict";
let ans;
document.querySelector("#submit").addEventListener("click", submit);
document.querySelector("area").addEventListener("click", click);
function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/5", true);
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
    document.querySelector(".imgg1").classList.add("hidden");

    document.querySelector(".imgg2").classList.remove("hidden");
}
