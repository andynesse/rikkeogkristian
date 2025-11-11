document.addEventListener("DOMContentLoaded", function(){
    const ddNavCloseBtn = document.querySelector(".ddnav_close");

    ddNavCloseBtn.addEventListener("click", function(){
        ddNavCloseBtn.parentElement.className = "ddnav"
    })
});

function openNav() {
    const ddNav = document.querySelector(".ddnav");
    ddNav.className = "ddnav ddnav--open";
}