const buttons = document.querySelectorAll('.button__semanas');
const tabsMain = document.querySelectorAll('.tab');
const headerImg = document.getElementsByClassName('main__image');
const tabTextContent = document.querySelector('.tab__content-text')

const toggleTab = e => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    const p = e.querySelectorAll('p')
    let text = p[0].innerHTML
    let button_buy = document.querySelector('.button__buy-now');
    button_buy.innerText = `Buy now - ${text.substr(0, 4)}`
    e.classList.toggle('active');
    if (buttons[0].classList === 'active') {
        buttons[0].style.borderRight = "none"
    }
}

const toggleTabMain = e => {

    for (let i = 0; i < tabsMain.length; i++) {
        tabsMain[i].classList.remove('activeMainTab');
    }
    let textTab = e.querySelector('.tab__text')
    if (textTab.innerHTML === 'description') {
        console.log(tabTextContent)
        tabTextContent.innerHTML = 'It is especially recommended by doctors involved in Fertility matters,' +
            ' as it specifically contains all the vitamins that' +
            ' play an important role in the male reproductive system.'
    } else if (textTab.innerHTML === 'reviews') {
        tabTextContent.innerHTML = ' New formula! With antioxidant vitamins and minerals essential for male fertility'
    } else if (textTab.innerHTML = 'details') {
        tabTextContent.innerHTML = 'Half of infertility problems are male,' +
            ' many of them go unnoticed too ' +
            'because men don\'t want to acknowledge it.'
    }

    e.classList.toggle('activeMainTab');

}

const imageSwitcher = (e) => {
    const mainImg = document.querySelector('.main__image')
    const clickedImg = e.querySelector('img').getAttribute('src');
    const checkPopular = e.querySelector('img').getAttribute('id');
    mainImg.setAttribute('src', clickedImg);

    let pupularImg = document.getElementsByClassName('popular');
    if (checkPopular !== 'img1') {

        pupularImg[0].style.display = "none"
    } else {
        pupularImg[0].style.display = "initial"
    }
}
const sliderImages = document.querySelectorAll('.slider__image')
let count = 0;
let step = 0;

const imageSwitcherTimer = (e) => {
    let countNextId = count + 1
    if (countNextId === 3) {
        countNextId = 0
    }



    const nextImg = sliderImages[countNextId].querySelector('img').getAttribute('src');


    const checkPopular = sliderImages[countNextId].querySelector('img').getAttribute('data-popular');

    if (count === 2) {
        count = 0
    } else {
        count++
    }

    const mainImgTimer = document.querySelector('.main__image')
    mainImgTimer.setAttribute('src', nextImg)
    headerImg[0].animate([
        {opacity: 0},
        {opacity: 1}
    ], 2000);
    let pupularImg = document.getElementsByClassName('popular');
    if (checkPopular === 'true') {
        pupularImg[0].style.display = "initial"
    } else {
        pupularImg[0].style.display = "none"

    }
}

setInterval(function (e) {

    let currentImg = sliderImages[count]
    if (step === 0) {
        step++
        currentImg.classList.add('step1')

    } else if (step === 1) {

        step++
        currentImg.classList.add('step2')
    } else if (step === 2) {
        step++
        currentImg.classList.add('step3')
    } else if (step === 3) {
        step++
        currentImg.classList.add('step4')
    } else if (step === 4) {
        currentImg.classList.remove('step1', 'step2', 'step3', 'step4')
        step = 0
        let pupularImg = document.getElementsByClassName('popular');
        pupularImg[0].style.display = "none"
        imageSwitcherTimer()
    }
}, 1000)


let modal = document.getElementById("myModal");
let btn = document.getElementById("popup");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

