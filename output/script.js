"use strict";
var intereactiveNumber = document.querySelectorAll(".numbers");
let mainDiv = document.querySelector('.main');
var submitBtn = document.querySelector('.sb-btn');
let updateRatingDiv = document.querySelector('.ratingText');
let ratingDiv = document.querySelector('.rate');
var ratingPoint;
intereactiveNumber.forEach((element) => {
    element.addEventListener("click", (e) => {
        let targets = e.target.dataset.num;
        let divTag = document.querySelector(`[data-num="${targets}"]`);
        divTag.classList.remove('round_gray');
        divTag.classList.add('round_medium_gray');
        intereactiveNumber.forEach((newElement) => {
            var _a;
            let ignoreTag = (_a = newElement.attributes.getNamedItem('data-num')) === null || _a === void 0 ? void 0 : _a.value;
            ratingPoint = targets;
            if (ignoreTag !== targets) {
                newElement.classList.add('round_gray');
                newElement.classList.remove('round_medium_gray');
            }
        });
    });
});
submitBtn.addEventListener('click', () => {
    mainDiv.classList.remove('flex');
    mainDiv.classList.add('hidden');
    var updateText = `You selected ${ratingPoint} out of 5`;
    updateRatingDiv.innerHTML = updateText;
    ratingDiv.classList.remove('hidden');
    ratingDiv.classList.add('.flex');
});
