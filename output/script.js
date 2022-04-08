"use strict";
var intereactiveNumber = document.querySelectorAll(".numbers");
intereactiveNumber.forEach((element) => {
    element.addEventListener("click", (e) => {
        let targets = e.target.dataset.num;
        let divTag = document.querySelector(`[data-num="${targets}"]`);
        divTag.classList.remove('round_gray');
        divTag.classList.add('round_medium_gray');
        intereactiveNumber.forEach((newElement) => {
            var _a;
            let ignoreTag = (_a = newElement.attributes.getNamedItem('data-num')) === null || _a === void 0 ? void 0 : _a.value;
            if (ignoreTag !== targets) {
                newElement.classList.add('round_gray');
                newElement.classList.remove('round_medium_gray');
            }
            //    console.log("Targets="+targets);
            //    console.log("ignoreTargets="+ignoreTag);
        });
    });
});
