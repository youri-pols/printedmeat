/* Nav scroll class */
const nav = document.querySelector(".navigation");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll >= 1) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }
});
