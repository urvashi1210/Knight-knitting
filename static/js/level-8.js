"use strict";
window.history.pushState(null, null, "?");
document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    return false;
});

document.addEventListener("dblclick", function () {
    function update(e) {
        var x = e.clientX || e.touches[0].clientX;
        var y = e.clientY || e.touches[0].clientY;

        document.documentElement.style.setProperty("--cursorX", x + "px");
        document.documentElement.style.setProperty("--cursorY", y + "px");
    }

    document.addEventListener("mousemove", update);
    document.addEventListener("touchmove", update);
    document.querySelector(".dark").classList.remove("visibile");
});
