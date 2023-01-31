let navbar = document.querySelector(".header .navbar");

document.querySelector("#menu-btn").onclick =() => {
    navbar.classList.toggle("active");
}

window.onscroll =() => {
    navbar.classList.remove("active");
}

document.querySelectorAll(".contact .row .faq .box h3").forEach(faqBox => {
    faqBox.onclick = () => {
        faqBox.parentElement.classList.toggle("active");
    }
});

var swiper = new Swiper(".home-slider", {
    loop: true,
    effect: "coverflow",
    spaceBetween: 30,
    grabCursor: true,
    coverflowEffect:{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },

    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".gallery-slider", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    coverflowEffect:{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

var swiper = new Swiper(".reviews-slider", {
    loop: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
},
        991: {
            slidesPerView: 2,
},
    },
});