// Denna fil skall innehålla JavaScript (JS)

// Burger Meny
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')



function toggleMeny() {

    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}


burger.addEventListener('click', toggleMeny)

// Färgknappar för produkter
const blueimage = document.querySelector('.blueProductImg')
const bluebutton = document.querySelector('.blueB')
const productimage = document.querySelector('.productImg')

//function toggleBlue() {

//    productimage.classList.toggle('blueProductImg')
//}
//bluebutton.addEventListener('click', toggleBlue)
