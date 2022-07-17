/* side bar collapse */
const backDrop = document.querySelector("#back_drop");
const sideBar = document.querySelector("#side_bar");

function Sidebar() {

    if (sideBar.dataset.toggle === "close") {
        backDrop.classList.replace("hidden", "block");
        sideBar.classList.replace("-right-full", "right-0");
        sideBar.dataset.toggle = "open";
    } else {
        backDrop.classList.replace("block", "hidden");
        sideBar.classList.replace("right-0", "-right-full");
        sideBar.dataset.toggle = "close";
    }

}

/* collapse navbar item */

function collapseItem(el) {
    
    const collapseContent = el.nextElementSibling;
    const collapseArrow = el.children[1];

    if (collapseContent.dataset.toggle === "close") {
        collapseContent.classList.replace("hidden", "block");
        collapseArrow.classList.replace("rotate-0", "rotate-180");
        collapseContent.dataset.toggle = "open";
    } else {
        collapseContent.classList.replace("block", "hidden");
        collapseArrow.classList.replace("rotate-180", "rotate-0");
        collapseContent.dataset.toggle = "close";
    }

}