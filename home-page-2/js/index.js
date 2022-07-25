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

/* slider in header */
// var slider = document.getElementById('slider'),
//     sliderItems = document.getElementById('slides'),
//     prev = document.getElementById('prev'),
//     next = document.getElementById('next');

// function slide(wrapper, items, prev, next) {
//     var posX1 = 0,
//         posX2 = 0,
//         posInitial,
//         posFinal,
//         threshold = 100,
//         slides = items.getElementsByClassName('slide'),
//         slidesLength = slides.length,
//         slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
//         firstSlide = slides[0],
//         lastSlide = slides[slidesLength - 1],
//         cloneFirst = firstSlide.cloneNode(true),
//         cloneLast = lastSlide.cloneNode(true),
//         index = 0,
//         allowShift = true;

//     // Clone first and last slide
//     items.appendChild(cloneFirst);
//     items.insertBefore(cloneLast, firstSlide);
//     wrapper.classList.add('loaded');

//     // Mouse events
//     items.onmousedown = dragStart;

//     // Touch events
//     items.addEventListener('touchstart', dragStart);
//     items.addEventListener('touchend', dragEnd);
//     items.addEventListener('touchmove', dragAction);

//     // Click events
//     prev.addEventListener('click', function () { shiftSlide(-1) });
//     next.addEventListener('click', function () { shiftSlide(1) });

//     // Transition events
//     items.addEventListener('transitionend', checkIndex);

//     function dragStart(e) {
//         e = e || window.event;
//         e.preventDefault();
//         posInitial = items.offsetLeft;

//         if (e.type == 'touchstart') {
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX1 = e.clientX;
//             document.onmouseup = dragEnd;
//             document.onmousemove = dragAction;
//         }
//     }

//     function dragAction(e) {
//         e = e || window.event;

//         if (e.type == 'touchmove') {
//             posX2 = posX1 - e.touches[0].clientX;
//             posX1 = e.touches[0].clientX;
//         } else {
//             posX2 = posX1 - e.clientX;
//             posX1 = e.clientX;
//         }
//         items.style.left = (items.offsetLeft - posX2) + "px";
//     }

//     function dragEnd(e) {
//         posFinal = items.offsetLeft;
//         if (posFinal - posInitial < -threshold) {
//             shiftSlide(1, 'drag');
//         } else if (posFinal - posInitial > threshold) {
//             shiftSlide(-1, 'drag');
//         } else {
//             items.style.left = (posInitial) + "px";
//         }

//         document.onmouseup = null;
//         document.onmousemove = null;
//     }

//     function shiftSlide(dir, action) {
//         items.classList.add('shifting');

//         if (allowShift) {
//             if (!action) { posInitial = items.offsetLeft; }

//             if (dir == 1) {
//                 items.style.left = (posInitial - slideSize) + "px";
//                 index++;
//             } else if (dir == -1) {
//                 items.style.left = (posInitial + slideSize) + "px";
//                 index--;
//             }
//         };

//         allowShift = false;
//     }

//     function checkIndex() {
//         items.classList.remove('shifting');

//         if (index == -1) {
//             items.style.left = -(slidesLength * slideSize) + "px";
//             index = slidesLength - 1;
//         }

//         if (index == slidesLength) {
//             items.style.left = -(1 * slideSize) + "px";
//             index = 0;
//         }

//         allowShift = true;
//     }
// }

// slide(slider, sliderItems, prev, next);