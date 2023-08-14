let numberContainer = document.querySelector('.rating-state__number-container');
let rateNumber = document.querySelector('.thankyou-state__result--number');
let submitBtn = document.querySelector('.rating-state__button');
let ratingState = document.querySelector('.rating-state');
let thankyouState = document.querySelector('.thankyou-state');

numberContainer.addEventListener('click', (e)=>{
  let numberSelect = e.target.innerText;
  rateNumber.innerText = numberSelect;
  if(numberSelect <= 5) {
    submitBtn.addEventListener('click', ()=>{
      ratingState.style.display = 'none';
      thankyouState.style.display = 'flex';
    })
  }
});
