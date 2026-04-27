const header = document.querySelector("header");
const menuButtons = document.querySelectorAll(".menu button");

menuButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        header.classList.toggle("open");
    });
});

const bannerImages = document.querySelectorAll(".banner-img");
let bannerIndex = 0;

setInterval(function() {
    bannerImages[bannerIndex].classList.remove("show");
    bannerIndex = bannerIndex + 1;
    if (bannerIndex >= bannerImages.length) {
        bannerIndex = 0;
    }
    bannerImages[bannerIndex].classList.add("show");
}, 3000);

const noticeBtn = document.querySelector("#noticeBtn");
const pressBtn = document.querySelector("#pressBtn");
const noticeBox = document.querySelector("#noticeBox");
const pressBox = document.querySelector("#pressBox");

noticeBtn.addEventListener("click", function() {
    noticeBox.classList.remove("hidden");
    pressBox.classList.add("hidden");

    noticeBtn.classList.add("active");
    pressBtn.classList.remove("active");
});

pressBtn.addEventListener("click", function() {
    pressBox.classList.remove("hidden");
    noticeBox.classList.add("hidden");

    pressBtn.classList.add("active");
    noticeBtn.classList.remove("active");
});

const popupOpen = document.querySelector("#popupOpen");
const popupBg = document.querySelector("#popupBg");
const popupClose = document.querySelector("#popupClose");

popupOpen.addEventListener("click", function() {
    popupBg.classList.add("show");
});

popupClose.addEventListener("click", function() {
    popupBg.classList.remove("show");
});