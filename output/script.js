"use strict";
var intereactiveNumber = document.querySelectorAll(".numbers");
intereactiveNumber.forEach((element) => {
    element.addEventListener("click", (e) => {
        let targets = e.target;
        targets.classList.remove('round_gray');
        targets.classList.add('round_medium_gray');
        intereactiveNumber.forEach((element) => {
            if (element !== e) {
                element.classList.add('round_gray');
                element.classList.remove('round_medium_gray');
            }
        });
    });
});
