/* use to replace a tag's class */
replaceClass = (el, from, to) => el.classList.replace(from, to);


/* side bar collapse */
const backDrop = document.querySelector("#back_drop");
const sideBar = document.querySelector("#side_bar");

function Sidebar() {

    if (sideBar.dataset.toggle === "close") {
        replaceClass(backDrop, "hidden", "block");
        replaceClass(sideBar, "-right-full", "right-0");
        sideBar.dataset.toggle = "open";
    } else {
        replaceClass(backDrop, "block", "hidden");
        replaceClass(sideBar, "right-0", "-right-full");
        sideBar.dataset.toggle = "close";
    }

}


/* collapse navbar items */
function collapseItem(el) {

    const collapseContent = el.nextElementSibling;
    const collapseArrow = el.children[1];

    if (collapseContent.dataset.toggle === "close") {
        replaceClass(collapseContent, "hidden", "block");
        replaceClass(collapseArrow, "rotate-0", "rotate-180");
        collapseContent.dataset.toggle = "open";
    } else {
        replaceClass(collapseContent, "block", "hidden");
        replaceClass(collapseArrow, "rotate-180", "rotate-0");
        collapseContent.dataset.toggle = "close";
    }

}


/* use to show navbar items content */
const itemContent = document.querySelectorAll(".navbar-items-content")
const navItem = document.querySelectorAll(".nav-item")

function showNavbarContent(el, n) {

    for (let i = 0; i < itemContent.length; i++) {
        replaceClass(itemContent[i], "block", "hidden");
        navItem[i].classList.remove("active-nav-item");
    }

    replaceClass(itemContent[n - 1], "hidden", "block");
    navItem[n - 1].classList.add("active-nav-item");

}


/* navbar vertical slider */
const navbarSliderContainer = document.querySelector("#navbar-slider-container");

const interval = setInterval(function () {

    const navbarSliderLastChild = navbarSliderContainer.lastChild;
    navbarSliderContainer.prepend(navbarSliderLastChild);

    let i;
    for (i = 0; i < navbarSliderContainer.children.length; i++) {
        navbarSliderContainer.children[i].classList.remove("blur-[2px]", "blur-none");
        navbarSliderContainer.children[i].classList.add("blur-[2px]");
    }

    navbarSliderContainer.children[1].classList.add("blur-none");

}, 3000);


/* use to duplicate products */
const productContainer = document.querySelector("#product_container");
let count = 0;

function moreProduct() {

    if (count < 2) {
        productContainer.innerHTML += productContainer.innerHTML;
        count++;
    }
    else {
        alert("There are no more products...");
    }

}

/* mouse tracking with pure js */
let pointerX;
let pointerY;
const monitorPhoto = document.querySelector("#monitor_photo");

document.onmousemove = function (event) {

    pointerX = event.clientX;
    pointerY = event.clientY;

}

setInterval(pointerCheck, 1000);
function pointerCheck() {

    let screenW = window.innerWidth;
    let screenH = window.innerHeight;
    // console.log('Cursor at: ' + pointerX + ', ' + pointerY);
    // console.log(screenW);
    // console.log(screenH);

}