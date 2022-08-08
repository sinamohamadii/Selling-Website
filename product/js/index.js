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


/* to open the select option in header search input */
const selectDropDown = document.querySelector("#select_drop_down");
let selectDropDownToggle = selectDropDown.dataset.collapse;

function openSelect() {

    if (selectDropDownToggle === "false") {
        replaceClass(selectDropDown, "hidden", "flex");
        selectDropDownToggle = "true";
    }
    else {
        replaceClass(selectDropDown, "flex", "hidden");
        selectDropDownToggle = "false";
    }

}

/* sliders */
let headerSwiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false
    },
});


let discountSwiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


let productSwiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


/* discount countdown */
let countDownDate = new Date("August 25, 2022 15:37:25").getTime();
let elSeconds = document.querySelectorAll(".seconds");
let elMinutes = document.querySelectorAll(".minutes");
let elHours = document.querySelectorAll(".hours");
let elDays = document.querySelectorAll(".days");

let x = setInterval(function () {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    let i;
    for (i = 0; i < elSeconds.length; i++) {
        elSeconds[i].innerHTML = seconds;
    }
    for (i = 0; i < elMinutes.length; i++) {
        elMinutes[i].innerHTML = minutes;
    }
    for (i = 0; i < elHours.length; i++) {
        elHours[i].innerHTML = hours;
    }
    for (i = 0; i < elDays.length; i++) {
        elDays[i].innerHTML = days;
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);