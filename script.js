const menuIcon=document.querySelector("#menu-icon");
const navbar=document.querySelector(".navbar");

menuIcon.onclick =() => {
    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
        menuIcon.classList.add("fa-bars");
        menuIcon.classList.remove("fa-xmark");
    });
});
