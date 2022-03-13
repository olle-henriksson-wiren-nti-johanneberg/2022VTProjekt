// Denna fil skall innehålla JavaScript (JS)

// Burger Meny
const nav = document.querySelector('.navLinks')
const burger = document.querySelector('.burger')



function toggleMeny() {

    nav.classList.toggle('navActive')
    burger.classList.toggle('toggle')

}


burger.addEventListener('click', toggleMeny)

function toggleCart() {

    cart.classList.toggle('cartUnactive')
}

burger.addEventListener('click', toggleCart)






// Färgknappar för produkter
const blueimage = document.querySelector('.blueProductImg')
const bluebutton = document.querySelector('.blueB')
const productimage = document.querySelector('.productImg')



// Attach listener function on state changes 

var desktopsize = window.matchMedia("(min-width: 480px)")

function toggleBlack(desktopsize) {
    if (window.matchMedia("(min-width: 480px").matches) {

    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_black.jpg"

    document.getElementById("blackB").style.boxShadow = "0 0 0 5px black"    
    document.getElementById("blackB").style.border = "1.5em outset #585859"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"

    document.getElementById("redB").style.border = "1em outset red"
    document.getElementById("whiteB").style.border = "1em outset #F2F2F2"
    document.getElementById("blueB").style.border = "1em outset blue"

    document.getElementById("blackB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"

    } else {
    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_black.jpg"

    document.getElementById("blackB").style.boxShadow = "0 0 0 3px white"    
    document.getElementById("blackB").style.border = "1em outset #585859"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"

    document.getElementById("redB").style.border = "0.7em outset red"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"
    document.getElementById("blueB").style.border = "0.7em outset blue"

    document.getElementById("blackB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    }

    }

function toggleWhite(desktopsize) {
    if (window.matchMedia("(min-width: 480px)").matches) {
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_white.jpg"

    document.getElementById("whiteB").style.boxShadow = "0 0 0 5px black"    
    document.getElementById("whiteB").style.border = "1.5em outset white"
    document.getElementById("blackB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"

    document.getElementById("blueB").style.border = "1em outset blue"
    document.getElementById("blackB").style.border = "1em outset #585859"
    document.getElementById("redB").style.border = "1em outset red"

    document.getElementById("whiteB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"


    } else {
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_white.jpg"

    document.getElementById("whiteB").style.boxShadow = "0 0 0 3px black"    
    document.getElementById("whiteB").style.border = "1em outset white"
    document.getElementById("blackB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"

    document.getElementById("blueB").style.border = "0.7em outset blue"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("redB").style.border = "0.7em outset red"

    document.getElementById("whiteB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"
    }

    // funkar

}
function toggleBlue(desktopsize) { //för 480px och över, alltså desktop
    if (window.matchMedia("(min-width: 480px)").matches) {
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_blue.jpg"

    document.getElementById("blueB").style.boxShadow = "0 0 0 5px black"
    document.getElementById("blueB").style.border = "1.5em outset blue"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blackB").style.boxShadow = "none"

    document.getElementById("redB").style.border = "1em outset red"
    document.getElementById("blackB").style.border = "1em outset #585859"
    document.getElementById("whiteB").style.border = "1em outset #F2F2F2"

    document.getElementById("blueB").style.transform = "rotate(360deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"

    } else { //För mobil
    document.getElementById("productImg").src ="../img/rick-muigo-SX9IouL_qOg-unsplash_blue.jpg"

    document.getElementById("blueB").style.boxShadow = "0 0 0 3px white"
    document.getElementById("blueB").style.border = "1em outset blue"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("redB").style.boxShadow = "none"
    document.getElementById("blackB").style.boxShadow = "none"

    document.getElementById("redB").style.border = "0.7em outset red"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"

    document.getElementById("blueB").style.transform = "rotate(360deg)"
    document.getElementById("redB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"
    }

    // funkar

} //Röd bullshit
function toggleRed(desktopsize) {
    if (window.matchMedia("(min-width: 480px)").matches) {
    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_red.jpg"

    document.getElementById("redB").style.boxShadow = "0 0 0 5px black"
    document.getElementById("redB").style.border = "1.5em outset red"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("blackB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"
    
    document.getElementById("blueB").style.border = "1em outset blue"
    document.getElementById("blackB").style.border = "1em outset #585859"
    document.getElementById("whiteB").style.border = "1em outset #F2F2F2"
    
    document.getElementById("redB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"
    } else {
    document.getElementById("productImg").src = "../img/rick-muigo-SX9IouL_qOg-unsplash_red.jpg"

    document.getElementById("redB").style.boxShadow = "0 0 0 3px black"
    document.getElementById("redB").style.border = "1em outset red"
    document.getElementById("whiteB").style.boxShadow = "none"
    document.getElementById("blackB").style.boxShadow = "none"
    document.getElementById("blueB").style.boxShadow = "none"

    document.getElementById("blueB").style.border = "0.7em outset blue"
    document.getElementById("blackB").style.border = "0.7em outset #585859"
    document.getElementById("whiteB").style.border = "0.7em outset #F2F2F2"

    document.getElementById("redB").style.transform = "rotate(360deg)"
    document.getElementById("blueB").style.transform = "rotate(0deg)"
    document.getElementById("whiteB").style.transform = "rotate(0deg)"
    document.getElementById("blackB").style.transform = "rotate(0deg)"
    }


// funkar
}

