window.addEventListener("load",(function(){const e=document.querySelectorAll('[data-slider="basic"]'),r=document.querySelectorAll('[data-slider="dark"]'),t=document.querySelectorAll('[data-slider="hero"]');e&&e.forEach((e=>{new Swiper(e.querySelector(".swiper-basic"),{loop:!0,slidesPerView:"auto",spaceBetween:25,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:25},414:{spaceBetween:25},1024:{spaceBetween:40}}})})),r&&r.forEach((e=>{new Swiper(e.querySelector(".swiper-dark"),{loop:!0,loopSlides:6,observer:!0,observeParents:!0,observeSlideChildren:!0,autoHeight:!0,slidesPerView:"auto",spaceBetween:20,navigation:{nextEl:".swiper-button-next-dark",prevEl:".swiper-button-prev-dark"},breakpoints:{320:{spaceBetween:25},414:{spaceBetween:25},1024:{spaceBetween:40}}})})),t&&t.forEach((e=>{new Swiper(e.querySelector(".swiper-hero"),{loop:!0,loopSlides:3,centeredSlides:!0,navigation:{nextEl:".swiper-hero-button-next",prevEl:".swiper-hero-button-prev"}})}))}));
//# sourceMappingURL=hotel.09f9a998.js.map
