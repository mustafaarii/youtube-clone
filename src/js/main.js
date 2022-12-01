//selectors
const navbar = document.getElementsByClassName("navbar")[0];
const navmenu = document.getElementById("nav_menu");
const sidebar = document.getElementsByClassName("sidebar")[0];
const bodyContainer = document.getElementsByClassName("body-container")[0];
const categoriesButtons = document.querySelector(".body-container .categories-buttons");
const loginButton = document.querySelector(".login_button");
const blackWindow = document.querySelector(".black-window");
const watchPageReadMoreButton = document.querySelector(".watch-container__content .left .left__description .read-more");
const collapsibleDiv = document.querySelector(".watch-container__content .left .left__description .collapsable");
const switchTheme = document.querySelector(".navbar .start .mode-switch");
//variables
let oldScrollY = window.scrollY;

//events
function toggleNavbarButton() {
    let display = navmenu.style.display;
    if (display == 'none')
        navmenu.style.display = 'block';
    else
        navmenu.style.display = 'none';
}

function toggleHamburgerButton(page) {
    let className = "closed";
    if(page == "watch"){
        className = "opened";
        if(blackWindow.classList.contains(className)) {
            blackWindow.classList.remove(className)
            document.body.style.overflow = "auto"
        }else {
            blackWindow.classList.add(className)
            document.body.style.overflow = "hidden";
        }
        
    }
        sidebar.classList.contains(className) ? sidebar.classList.remove(className) : sidebar.classList.add(className);
}

function closeElement(element) {
    element.style.display = 'none';
}

function toggleReadMoreLeftDescription(){
    const classes = collapsibleDiv.classList;
    if(classes.contains("hidden")){
        collapsibleDiv.classList.remove("hidden");
        collapsibleDiv.classList.add("visible");
    }else {
        collapsibleDiv.classList.remove("visible");
        collapsibleDiv.classList.add("hidden");
    }
}

function onselectDataList(e) {
    console.log(e);
}

window.onload = function onloadFunc(e) {
    bodyContainer.addEventListener("click", ()=>closeElement(navmenu))
    switchTheme.addEventListener("click", () => {
        const theme = document.documentElement.getAttribute("theme");
        console.log(theme);
        if(theme === "light")
            document.documentElement.removeAttribute('theme');
        else
            document.documentElement.setAttribute("theme","light");    
    })

    blackWindow.addEventListener("click", ()=>{
        blackWindow.classList.remove("opened");
        sidebar.classList.remove("opened");
        document.body.style.overflow = "auto"
    })

    watchPageReadMoreButton.addEventListener("click", toggleReadMoreLeftDescription);
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
