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
let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    thumbs: {
        swiper: swiper,
    },
});
let productSwiper = new Swiper(".mySwiper3", {
    spaceBetween: 30,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
let swiper4 = new Swiper(".mySwiper4", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
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

/* use to collapse more dscription box */
const moreBox = document.querySelector("#description_box");
const shadowBox = document.querySelector("#shadow_box");
let moreBoxCollapse = moreBox.dataset.collapse;

function collpaseDescription(el) {

    if (moreBoxCollapse === "close") {

        el.innerText = "کمتر";
        shadowBox.classList.add("hidden");
        moreBox.classList.add("!h-auto");
        moreBoxCollapse = "open";

    } else {

        el.innerText = "بیشتر...";
        shadowBox.classList.remove("hidden");
        moreBoxCollapse = "close";
        moreBox.classList.remove("!h-auto");

    }

}

/* use to change tabs */
const tabs = document.querySelectorAll(".tab");
const tabButtons = document.querySelectorAll(".tab-btn");

function changeTab(n) {

    let i;
    for (i = 0; i < tabs.length; i++) {
        replaceClass(tabs[i], "block", "hidden");
        tabButtons[i].classList.remove("active-product-tab");
    }

    replaceClass(tabs[n - 1], "hidden", "block");
    tabButtons[n - 1].classList.add("active-product-tab");

}


/* use to open more in description */


function collapseMore(el) {

    let content = el.nextElementSibling;

    if (content.dataset.toggle === "false") {
        replaceClass(content, "hidden", "flex");
        content.dataset.toggle = "true";
        el.children[0].innerText = "-";
        el.children[0].classList.remove("bg-gray-100");
        el.classList.remove("bg-white");
    }

    else if (content.dataset.toggle === "true") {
        replaceClass(content, "flex", "hidden");
        content.dataset.toggle = "false";
        el.children[0].innerText = "+";
        el.children[0].classList.add("bg-gray-100");
        el.classList.add("bg-white");
    }

}

/* user to scroll between tags */

let scrollBtn = document.querySelectorAll(".scroll-btn");

function scrollTag(n) {

    let id = n;

    let i;
    for (i = 0; i < scrollBtn.length; i++) {
        scrollBtn[i].classList.remove("acrive-scroll-tab");
    }

    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    scrollBtn[n - 1].classList.add("acrive-scroll-tab");

}

window.onscroll = function (event) {
    let scroll = window.pageYOffset;

    console.log(scroll);
    if (scroll <= 1573) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[0].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 1909) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[1].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 2245) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[2].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 2581) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[3].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 2917) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[4].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 3253) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[5].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 3589) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[6].classList.add("acrive-scroll-tab");

    }
    else if (scroll <= 3925) {

        for (i = 0; i < scrollBtn.length; i++) {
            scrollBtn[i].classList.remove("acrive-scroll-tab");
        }
        scrollBtn[7].classList.add("acrive-scroll-tab");

    }
}