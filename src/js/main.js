//selectors
const navbar = document.getElementsByClassName("navbar")[0];
const navmenu = document.getElementById("nav_menu");
const sidebar = document.getElementsByClassName("sidebar")[0];
const bodyContainer = document.getElementsByClassName("body-container")[0];
const categoriesButtons = document.querySelector(".body-container .categories-buttons");
const loginButton = document.querySelector(".login_button");
const blackWindow = document.querySelector(".black-window");

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

function toggleHamburgerButton(page) {
    let className = "closed";
    if(page == "watch"){
        className = "opened";
        blackWindow.classList.contains(className) ? blackWindow.classList.remove(className) : blackWindow.classList.add(className);
        document.body.style.overflow = "hidden"
    }
        sidebar.classList.contains(className) ? sidebar.classList.remove(className) : sidebar.classList.add(className);
}

function closeElement(element) {
    element.style.display = 'none';
}


window.onload = function onloadFunc(e) {
    bodyContainer.addEventListener("click", ()=>closeElement(navmenu))
    blackWindow.addEventListener("click", ()=>{
        blackWindow.classList.remove("opened");
        sidebar.classList.remove("opened");
        document.body.style.overflow = "auto"
    })
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
