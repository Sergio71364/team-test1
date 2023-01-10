function swiperSlider() {
  const basicSliders = document.querySelectorAll('[data-slider="basic"]');
  const darkSliders = document.querySelectorAll('[data-slider="dark"]');
  const heroSliders = document.querySelectorAll('[data-slider="hero"]');

  if (basicSliders) {
    basicSliders.forEach(slider => {
      const swiper = new Swiper(slider.querySelector('.swiper-basic'), {
        loop: true,
        // loopSlides: 6,
        // observer: true,
        // observeParents: true,
        // observeSlideChildren: true,
        // autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 25,
        // speed: 400,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          //   when window width is >= 320px
          320: {
            // centeredSlides: true,
            spaceBetween: 25,
          },
          //   when window width is >= 414px
          414: {
            spaceBetween: 25,
          },
          // when window width is >= 1024px
          1024: {
            spaceBetween: 40,

          },
        },
      });
    });
  }
  if (darkSliders) {
    darkSliders.forEach(slider => {
      const swiper = new Swiper(slider.querySelector('.swiper-dark'), {
        loop: true,
        loopSlides: 6,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        autoHeight: true,
        slidesPerView: 'auto',
        spaceBetween: 20,
        // speed: 400,
        navigation: {
          nextEl: '.swiper-button-next-dark',
          prevEl: '.swiper-button-prev-dark',
        },
        breakpoints: {
          //   when window width is >= 320px
          320: {
            // centeredSlides: true,
            spaceBetween: 25,
          },
          //   when window width is >= 414px
          414: {
            spaceBetween: 25,
          },
          // when window width is >= 1024px
          1024: {
            spaceBetween: 40,
          },
        },
      });
    });
  }

  //
  if (heroSliders) {
    heroSliders.forEach(slider => {
      const swiper = new Swiper(slider.querySelector('.swiper-hero'), {
        loop: true,
        loopSlides: 3,
        // slidesPerView: auto,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-hero-button-next',
          prevEl: '.swiper-hero-button-prev',
        },
      });
    });
  }
  //
}
window.addEventListener('load', swiperSlider);
