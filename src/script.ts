var intereactiveNumber=document.querySelectorAll(".numbers")!;
intereactiveNumber.forEach((element) => {
    element.addEventListener("click",(e: { target: any; })=>{
        let targets=e.target.dataset.num as HTMLInputElement;
        let divTag=document.querySelector(`[data-num="${targets}"]`)!;
        divTag.classList.remove('round_gray');
        divTag.classList.add('round_medium_gray');
        intereactiveNumber.forEach((newElement)=>{
           let ignoreTag=newElement.attributes.getNamedItem('data-num')?.value;
            if(ignoreTag!==targets){
                newElement.classList.add('round_gray');
                newElement.classList.remove('round_medium_gray');
            }
           //    console.log("Targets="+targets);
        //    console.log("ignoreTargets="+ignoreTag);
        });
    });
});