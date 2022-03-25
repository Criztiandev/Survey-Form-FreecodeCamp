// Dont Roast My Code
const ageInput = document.querySelector('#number')
const ageBtnUp = document.querySelector('.age-btn-up')
const ageBtnDown = document.querySelector('.age-btn-down')

const dayBtn= document.querySelector(".day-btn")
const monthBtn= document.querySelector(".month-btn")
const yearBtn= document.querySelector(".year-btn")

const dayDisplay = document.querySelector('.day-display')
const monthDisplay = document.querySelector('.month-display')
const yearDisplay = document.querySelector('.year-display')

const value = document.querySelector(".phone-value")
const slider = document.querySelector(".phone")
var inverval = 0

const monthList = ["January","Febuary", "March","April","May","June","July","Augost","September","October","November","December"];
const getRandomDate =()=>{
    return randomNum = Math.floor(Math.random() * 30);
}


  function timer() {
        if(ageInput.value < 1){
            ageInput.value = ageInput.getAttribute('max');
        }
         return ageInput.value -= 1
  }



ageBtnUp.addEventListener('click',(e) =>{
    e.preventDefault()
    inverval = setInterval(timer,10)
})

ageBtnDown.addEventListener('click',(e) =>{
    e.preventDefault()
    clearInterval(inverval)  
})


monthBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    monthDisplay.innerText = monthList[Math.floor(Math.random() * monthList.length)]
})

dayBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    dayDisplay.innerText = getRandomDate()
})

yearBtn.addEventListener('click',(e)=>{
    e.preventDefault()
    //Detect if two digit number
    yearDisplay.innerText = "200"+ getRandomDate()
})

slider.addEventListener('input',() =>{
    const min = 100000000;
    const max = 999000000;
    const val = Math.floor(Math.random()* max) + min + 10;

    value.innerHTML = val;
})

