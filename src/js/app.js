/* Nav scroll class */
const nav = document.querySelector(".navigation");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll - lastScroll > 0) {
        nav.classList.add("scrolled-down");
        nav.classList.remove("scrolled-up");
    } else {
        nav.classList.add("scrolled-up");
        nav.classList.remove("scrolled-down");
    }
    lastScroll = currentScroll;
});
