const body_width = document.querySelector('body')
const switcher = document.querySelector('.switcher')
const hamburger = document.querySelector('.hamburger')
const cross = document.querySelector('.close')
const nav = document.querySelector('nav')

if (body_width.clientWidth < 480) {
    switcher.addEventListener("click", () => {
        if (hamburger.classList.contains('index')) {
            hamburger.classList.remove("index")
            cross.classList.add("index")
            nav.classList.remove('display')
        } else {
            cross.classList.remove("index")
            hamburger.classList.add("index")
            nav.classList.add('display')
        }
    })
}