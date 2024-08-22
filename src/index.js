import "./styles.css";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import aboutContent from "./about.js";

console.log("Server running!");

{
    const header = document.querySelector("header");
    const logo = header.firstElementChild.firstElementChild;
    const homeBtn = logo.nextElementSibling;
    const menuBtn = homeBtn.nextElementSibling;
    const aboutBtn = menuBtn.nextElementSibling;

    const content = header.nextElementSibling;

    function removeBtnClass () {
        homeBtn.classList.remove("current");
        menuBtn.classList.remove("current");
        aboutBtn.classList.remove("current");
    }

    function toHome() {
        content.innerHTML = "";
        content.appendChild(homeContent());
        removeBtnClass();
        homeBtn.classList.add("current");
    }
    
    homeBtn.addEventListener("click", toHome);
    logo.addEventListener("click", toHome);
    
    menuBtn.addEventListener("click", ()=> {
        content.innerHTML = "";
        content.appendChild(menuContent());
        removeBtnClass();
        menuBtn.classList.add("current");
    })


    aboutBtn.addEventListener("click", ()=>{
        content.innerHTML = "";
        content.appendChild(aboutContent());
        removeBtnClass();
        aboutBtn.classList.add("current");
    })

    toHome();
}