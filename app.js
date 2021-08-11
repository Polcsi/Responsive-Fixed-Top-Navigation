const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".menu");

menuBtn.onclick = () => {
    menu.classList.add("show");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("show");
    menuBtn.classList.remove("hide");
}