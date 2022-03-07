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



// Attach listener function on state changes 

var desktopsize = window.matchMedia("(min-width: 480px)")

function toggleBlack(desktopsize) {
    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_black.jpg"
    document.getElementById("blackB").style.border = "1em inset gold"
    document.getElementById("redB").style.border = "0.7em outset red"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"
    document.getElementById("blueB").style.border = "0.7em outset blue"

    document.getElementById("blackB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"

    }


    // funkar inte
function toggleWhite(desktopsize) {
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_white.jpg"
    document.getElementById("whiteB").style.border = "1em inset gold"
    document.getElementById("blueB").style.border = "0.7em outset blue"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("redB").style.border = "0.7em outset red"

    document.getElementById("whiteB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"



    // funkar

}
function toggleBlue(desktopsize) {
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_blue.jpg"
    document.getElementById("blueB").style.border = "1em inset gold"
    document.getElementById("redB").style.border = "0.7em outset red"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"

    document.getElementById("blueB").style.transform = "rotate(360deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"


    // funkar

}
function toggleRed(desktopsize) {
    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_red.jpg"
    document.getElementById("redB").style.border = "1em inset gold "
    document.getElementById("blueB").style.border = "0.7em outset blue"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"

    document.getElementById("redB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"



// funkar
}

