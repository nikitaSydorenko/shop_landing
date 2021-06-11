

const buttons = document.querySelectorAll('.button__semanas')
for(let i = 0; i < buttons.length; i++){
    buttons[i].classList.remove('active')
    console.log(buttons[i])
    buttons[i].addEventListener('click', e => {
    const p = document.querySelectorAll('.semanas__price')
        buttons[i].classList.toggle('active')
            for(let j = 0; j < p.length; j ++){
                // buttons[j].classList.toggle('active')
                //
                //
                // console.log(p[j])
            }


        let text = p[i].textContent
        let button_buy = document.querySelector('.button__buy-now');
        // console.log(button_buy)
        button_buy.innerText = `Buy now - ${text}`
    })
}

