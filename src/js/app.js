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

function counter() {
    $(".amount").appear();
    $(".amount").on("appear", function () {
        $(this).each(function () {
            this.initNumAnim = true;
            var $this = $(this),
                countTo = $this.attr("data-amount");
            $({ countNum: $this.text() }).animate(
                { countNum: countTo },
                {
                    duration: 1000,
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    },
                }
            );
        });
    });
}

counter();

$(".socials a").hover(function () {
    $(this).removeClass("inactive");
    $(this).siblings().toggleClass("inactive");
});
