const solodBlock = document.querySelectorAll(".solod-factory-block");
const solodAddBlock = document.querySelectorAll(".solod-factory-add-info");

for (let i = 0; i < solodBlock.length; i++) {
    solodBlock[i].addEventListener("mouseover", function (e) {
        solodAddBlock[i].classList.add("dBlock");
        solodAddBlock[i].classList.remove("dNone");
    })
    solodBlock[i].addEventListener("mouseout", function (e) {
        solodAddBlock[i].classList.add("dNone");
        solodAddBlock[i].classList.remove("dBlock");
    })
}

$(document).ready(function() {
    $(".slider").slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        autoplay: false,
        speed: 900,
        autoplaySpeed: 1500,
    });
});

const logoWrapper = document.querySelector(".logo-wrapper");

logoWrapper.addEventListener("click", function (e) {
    window.scrollTo(0, 0);
})

const menuItemLink = document.querySelectorAll(".menu-item-link");

for (let i = 0; i< menuItemLink.length; i++) {
    menuItemLink[i].addEventListener("click", function (e) {
        const linkSection = document.getElementById(`${e.target.classList[1]}`);
        linkSection.scrollIntoView();
    })
}

const menuMobileItemLink = document.querySelectorAll(".menu-mobile-item");

for (let i = 0; i< menuMobileItemLink.length; i++) {
    menuMobileItemLink[i].addEventListener("click", function (e) {
        const linkSection = document.getElementById(`${e.target.classList[1]}`);
        linkSection.scrollIntoView();
    })
}
