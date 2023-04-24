"use strict";

document.getElementById("img").addEventListener("click", function () {
    document.getElementById("audio").play();
});
document.querySelector("#submit").addEventListener("click", submit);
let ans;
function submit() {
    ans = document.querySelector("input").value;
    if (ans == false) alert("Enter valid answer");
    else {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "/level/12", true);
        xhr.setRequestHeader("Content-type", "application/json");
        xhr.send(JSON.stringify({ ans }));
        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                window.location.reload();
            }
        };
    }
}
