const buttons = document.querySelectorAll('.button__semanas');
const tabsMain = document.querySelectorAll('.tab');

const toggleTab = e => {
    for (let i = 0; i < buttons.length; i++){
        buttons[i].classList.remove('active');
    }
    const p = e.querySelectorAll('p')
    let text = p[0].innerHTML
    let button_buy = document.querySelector('.button__buy-now');
    button_buy.innerText = `Buy now - ${text.substr(0, 4)}`
    e.classList.toggle('active');
}

const toggleTabMain = e => {
    for (let i = 0; i < tabsMain.length; i++){
        tabsMain[i].classList.remove('activeMainTab');
    }
    e.classList.toggle('activeMainTab');

}

const imageSwitcher = (e) => {
    const mainImg = document.querySelector('.main__image')
    const clickedImg = e.querySelector('img').getAttribute('src');
    mainImg.setAttribute('src', clickedImg);
    let pupularImg = document.getElementsByClassName('popular');
    if(clickedImg !== 'images/DSC09153%201.png'){

        pupularImg[0].style.display = "none"
    }else {
        pupularImg[0].style.display = "initial"
    }

}
const sliderImages = document.querySelectorAll('.slider__image')
let count = 0;
let step = 0;
const imageSwitcherTimer = (e) => {
    const nextImg = sliderImages[count].querySelector('img').getAttribute('src');
    if (count === 2 ){
        count = 0
    }else {
        count++
    }
    const mainImgTimer = document.querySelector('.main__image')
    mainImgTimer.setAttribute('src', nextImg)
    let pupularImg = document.getElementsByClassName('popular');
    if(nextImg !== 'images/DSC09153%201.png'){
        pupularImg[0].style.display = "none"
    }else {
        pupularImg[0].style.display = "initial"
    }
}


setInterval(function  (e){

    let currentImg = sliderImages[count]
    if(step === 0){
        step++
        currentImg.classList.add('step1')
    }else if(step === 1){

        step++
        currentImg.classList.add('step2')
    }else if(step === 2){
        step++
        currentImg.classList.add('step3')
    }else if(step === 3) {
        step++
        currentImg.classList.add('step4')
    }else if(step === 4) {
        currentImg.classList.remove('step1','step2','step3','step4' )
        step = 0
        imageSwitcherTimer()
    }
} ,1000)


function simplePopup() {
    const popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
