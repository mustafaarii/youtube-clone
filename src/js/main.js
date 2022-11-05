function toggleNavbarButton(){
    const nav = document.getElementById("nav_menu");
    let display = nav.style.display;
    
    if(display === 'none')
        nav.style.display = 'block';
    else
    nav.style.display = 'none';    

}

function toggleHamburgerButton() {
    const sidebar = document.getElementsByClassName("sidebar")[0];
    
    if(sidebar.classList.contains("closed"))
        sidebar.classList.remove("closed")
    else    
        sidebar.classList.add("closed")

}

function closeNavbarButton() {
    const nav = document.getElementById("nav_menu");
    nav.style.display = 'none';
}

window.onload = function onloadFunc(e){
    const container = document.getElementsByClassName("body-container")[0];
    container.addEventListener("click", closeNavbarButton)    
};