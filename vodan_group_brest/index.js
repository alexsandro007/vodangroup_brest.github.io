var input = document.querySelector("#phone");
window.intlTelInput(input, {
     separateDialCode: true,
     preferredCountries: ["by", "ru", "kz", "az", "ge"],
});

// Slider 1
var thumbnailSwiper1 = new Swiper('.thumbnail-slider-1', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper1 = new Swiper('.main-slider-1', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper1,
     },
});
 
mainSwiper1.controller.control = thumbnailSwiper1;
thumbnailSwiper1.controller.control = mainSwiper1;

// Slider 2
var thumbnailSwiper2 = new Swiper('.thumbnail-slider-2', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper2 = new Swiper('.main-slider-2', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper2,
     },
});
 
mainSwiper2.controller.control = thumbnailSwiper2;
thumbnailSwiper2.controller.control = mainSwiper2;

// Slider 3
var thumbnailSwiper3 = new Swiper('.thumbnail-slider-3', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper3 = new Swiper('.main-slider-3', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper3,
     },
});
 
mainSwiper3.controller.control = thumbnailSwiper3;
thumbnailSwiper3.controller.control = mainSwiper3;

// Slider 4
var thumbnailSwiper4 = new Swiper('.thumbnail-slider-4', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper4 = new Swiper('.main-slider-4', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper4,
     },
});
 
mainSwiper4.controller.control = thumbnailSwiper4;
thumbnailSwiper4.controller.control = mainSwiper4;

// Slider 5
var thumbnailSwiper5 = new Swiper('.thumbnail-slider-5', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper5 = new Swiper('.main-slider-5', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper5,
     },
});
 
mainSwiper5.controller.control = thumbnailSwiper5;
thumbnailSwiper5.controller.control = mainSwiper5;

// Slider 6
var thumbnailSwiper6 = new Swiper('.thumbnail-slider-6', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper6 = new Swiper('.main-slider-6', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper6,
     },
});
 
mainSwiper6.controller.control = thumbnailSwiper6;
thumbnailSwiper6.controller.control = mainSwiper6;

// Slider 7
var thumbnailSwiper7 = new Swiper('.thumbnail-slider-7', {
     slidesPerView: 4,
     spaceBetween: 10,
     freeMode: true,
     watchSlidesVisibility: true,
     watchSlidesProgress: true,
     loop: false,
});
 
var mainSwiper7 = new Swiper('.main-slider-7', {
     slidesPerView: 1,
     spaceBetween: 10,
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
     loop: false,
     controller: {
         control: thumbnailSwiper7,
     },
});
 
mainSwiper7.controller.control = thumbnailSwiper7;
thumbnailSwiper7.controller.control = mainSwiper7;
