let menuBtn = document.getElementById("menu-button");
let menu = document.getElementById("main-nav");

menuBtn.addEventListener("click", ()=>{
    menuBtn.classList.toggle("close-menu-button");
    menu.classList.toggle("open-menu")
}, false);

let navLink = document.getElementsByClassName("nav-link");

for (let i = 0; i < navLink.length; ++i) {
    navLink[i].addEventListener("click", ()=>{
        menuBtn.classList.toggle("close-menu-button");
        menu.classList.toggle("open-menu");
    }, false)
}

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 800
});