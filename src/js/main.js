//selectors
const navbar = document.getElementsByClassName("navbar")[0];
const navmenu = document.getElementById("nav_menu");
const sidebar = document.getElementsByClassName("sidebar")[0];
const bodyContainer = document.getElementsByClassName("body-container")[0];
const categoriesButtons = document.querySelector(".body-container .categories-buttons");
const loginButton = document.querySelector(".login_button");

//variables
let oldScrollY = window.scrollY;

//events
function toggleNavbarButton() {
    let display = navmenu.style.display;

    if (display === 'none')
        navmenu.style.display = 'block';
    else
        navmenu.style.display = 'none';

}

function toggleHamburgerButton() {
    if (sidebar.classList.contains("closed"))
        sidebar.classList.remove("closed")
    else
        sidebar.classList.add("closed")

}

function closeNavbarButton() {
    navmenu.style.display = 'none';
}

window.onload = function onloadFunc(e) {
    bodyContainer.addEventListener("click", closeNavbarButton)
};

// mobile actions

if (window.screen.width < 600) {
    window.onscroll = function onScroll(e) {

        if (oldScrollY < window.scrollY)
            translateVal = -100;
        else
            translateVal = 0;

        navbar.style.transform = "translateY(" + translateVal + "%)";
        categoriesButtons.style.transform = "translateY(" + translateVal * 2 + "%)";

        oldScrollY = window.scrollY;
    }


    loginButton.onclick = function onClickLoginButton(e) {
        let display = sidebar.style.display;

        if (display === 'none')
            sidebar.style.display = 'block';
        else
            sidebar.style.display = 'none';

    }
}
