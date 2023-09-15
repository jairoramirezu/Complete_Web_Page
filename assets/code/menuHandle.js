const openMenu = document.querySelector(".hamburgerMenu");
const mainMenu = document.querySelector(".mainMenu");
const anchor = document.querySelectorAll(".mainMenu--a");
const closeMenu = document.querySelector(".closeMenu");
const body = document.querySelector("body");
const buttonTop = document.querySelector(".buttonTopB");
const buttonTopC = document.querySelector(".buttonTopC");
const buttonC = document.querySelector(".buttonConvertion");
const planParol = document.querySelector(".parolButton");
const planJob = document.querySelector(".expressButton");
const href = document.location.href.split("/", [4]);
const link = document.querySelectorAll(".footer--links-N");
const prin = document.querySelectorAll(".mainMenu--a");

// to show blue on links people are navigating
for (let i = 0; i < link.length; i++) {
    const element = link[i];
    const elementRef = element.href.split("/", [4]);
    const final = elementRef[3];
    if (final === href[3]) {
        element.style.color = "#1f509e";
    }
}
for (let i = 0; i < prin.length; i++) {
    const element = prin[i];
    const elementRef = element.href.split("/", [4]);
    const final = elementRef[3];
    if (final === href[3]) {
        element.style.color = "#1f509e";
    }
}
// handle all the menu
if (screen.availWidth <= 880) {
    openMenu.addEventListener("click", show);
    closeMenu.addEventListener("click", close);
    anchor.forEach((item) => {
        item.addEventListener("click", function () {
            close();
        });
    });
} else if (screen.availWidth > 880) {
    mainMenu.style.left = "0";
}
// testominial cards
const carouselButton = document.querySelectorAll(".carousel__button");
const cardCarousel = document.querySelectorAll(".cardCarousel");
carouselButton[0].style.background = "#77b6e6";
cardCarousel[1].style.display = "none";
carouselButton[0].addEventListener("click", (e) => {
    carouselButton[0].style.background = "#77b6e6";
    carouselButton[1].style.background = "#1f509e";
    cardCarousel[1].style.display = "none";
    cardCarousel[0].style.display = "block";
});
carouselButton[1].addEventListener("click", (e) => {
    carouselButton[1].style.background = "#77b6e6";
    carouselButton[0].style.background = "#1f509e";
    cardCarousel[0].style.display = "none";
    cardCarousel[1].style.display = "block";
});
window.addEventListener("resize", () => {
    if (screen.availWidth <= 880) {
        close();
        openMenu.addEventListener("click", show);
        closeMenu.addEventListener("click", close);
        anchor.forEach((item) => {
            item.addEventListener("click", function () {
                close();
            });
        });
    } else if (screen.availWidth > 880) {
        mainMenu.style.left = "0";
        anchor.forEach((item) => {
            item.addEventListener("click", function () {
                mainMenu.style.left = "0";
            });
        });
    }
});
// hamburger menu functions to open and close
function show() {
    mainMenu.style.left = "0";
    body.style.overflow = "hidden";
}
function close() {
    mainMenu.style.left = "-100%";
    body.style.overflow = "visible";
}
// right button scroll to top
buttonTop.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
// right button to whatsapp
buttonTopC.addEventListener("click", () => {
    window.open("https://walink.co/6e39bb", "_blank");
});
// button to parole card
buttonC.addEventListener("click", () => {
    window.location.href = "../../pricing/#parolCard";
});
// button to payment parole
planParol.addEventListener("click", () => {
    window.location.href = "../../paymentDataParole";
});
// button to payment job
planJob.addEventListener("click", () => {
    window.location.href = "../../paymentDataJob";
});
