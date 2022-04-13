var intereactiveNumber=document.querySelectorAll(".numbers")!;
let mainDiv=document.querySelector('.main')!;
var submitBtn=document.querySelector('.sb-btn')!;
let updateRatingDiv=document.querySelector('.ratingText')!;
let ratingDiv=document.querySelector('.rate')!;
var ratingPoint: HTMLInputElement;
intereactiveNumber.forEach((element) => {
    element.addEventListener("click",(e: { target: any; })=>{
        let targets=e.target.dataset.num as HTMLInputElement;
        let divTag=document.querySelector(`[data-num="${targets}"]`)!;
        divTag.classList.remove('round_gray');
        divTag.classList.add('round_medium_gray');
        intereactiveNumber.forEach((newElement)=>{
           let ignoreTag=newElement.attributes.getNamedItem('data-num')?.value;
           ratingPoint=targets; 
           if(ignoreTag!==targets){
                newElement.classList.add('round_gray');
                newElement.classList.remove('round_medium_gray');
            }
        });
    });
});
submitBtn.addEventListener('click',()=>{
    mainDiv.classList.remove('flex');
    mainDiv.classList.add('hidden');
    var updateText=`You selected ${ratingPoint} out of 5`;
    updateRatingDiv.innerHTML=updateText;
    ratingDiv.classList.remove('hidden');
    ratingDiv.classList.add('.flex');
});