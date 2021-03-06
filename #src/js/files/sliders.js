//BuildSlider - строит HTML конструкцию для свайпера

let sliders = document.querySelectorAll('.swiper');
if (sliders) {
  for (let index = 0; index < sliders.length; index++) {
    let slider = sliders[index];
    if (!slider.classList.contains('swiper-container')) {
      let slider_items = slider.children;
      if (slider_items) {
        for (let index = 0; index < slider_items.length; index++) {
          let el = slider_items[index];
          el.classList.add('swiper-slide');
        }
      }
      let slider_content = slider.innerHTML;
      let slider_wrapper = document.createElement('div');
      slider_wrapper.classList.add('swiper-wrapper');
      slider_wrapper.innerHTML = slider_content;
      slider.innerHTML = '';
      slider.appendChild(slider_wrapper);
      slider.classList.add('swiper-container');
    }
    if (slider.classList.contains('_gallery')) {
      //slider.data('lightGallery').destroy(true);
    }
  }
  sliders_bild_callback();
}

function sliders_bild_callback(params) { }


// Project Sliders ====================================

// Duplicate section slider
if (document.querySelector('.duplicate__slider')) {
  var duplicate_slider = new Swiper('.duplicate__slider-body', {
    effect: 'fade',
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    speed: 800,
    loop: true,
    //Dots
    pagination: {
      el: '.duplicate .slider-control__count',
      // clickable: true,
      type: 'fraction',
    },
    // Arrows
    navigation: {
      nextEl: '.duplicate .slider-control__next',
      prevEl: '.duplicate .slider-control__prev',
    },
  })
}


//Brands Slider
if (document.querySelector('.brands__slider')) {
  var brands_slider = new Swiper('.brands__slider', {

    autoplay: {
      delay: 3000,
      disableOnInteraction: true,
    },
    slidesPerView: 7,
    centeredSlides: true,
    observer: true,
    observeParents: true,
    spaceBetween: 15,
    speed: 800,
    loop: true,
    // Arrows
    navigation: {
      nextEl: '.brands .slider-control__next',
      prevEl: '.brands .slider-control__prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 15,
        // centeredSlides: true,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
        // centeredSlides: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 4,
        spaceBetween: 15
      },
      // when window width is >= 850px
      850: {
        slidesPerView: 5,
        spaceBetween: 15
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 15
      },
      1200: {
        slidesPerView: 7,
        spaceBetween: 15
      }
    }
  })
}

if(document.querySelector('.blog-slider')) {
  var info_slider = new Swiper('.blog-slider', {
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    slidesPerView: 4,
    // centeredSlides: true,
    observer: true,
    observeParents: true,
    spaceBetween: 35,
    speed: 800,
    loop: true,

    pagination: {
      el: '.blog-count',
      // clickable: true,
      type: 'fraction',
    },
    // Arrows
    navigation: {
      nextEl: '.blog-next',
      prevEl: '.blog-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 35,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 35,
        // centeredSlides: true,
      },
      // when window width is >= 480px
      600: {
        slidesPerView: 2,
        spaceBetween: 35,
        // centeredSlides: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
        spaceBetween: 35
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 35
      },
      1205: {
        slidesPerView: 4,
        spaceBetween: 35
      }
    }
  })
}

if(document.querySelector('.feedback-slider')) {
  var feedback_slider = new Swiper('.feedback-slider', {
    // autoplay: {
    //   delay: 3000,
    //   disableOnInteraction: true,
    // },
    slidesPerView: 3,
    // centeredSlides: true,
    observer: true,
    observeParents: true,
    spaceBetween: 70,
    speed: 800,
    loop: true,

    pagination: {
      el: '.feedback-count',
      // clickable: true,
      type: 'fraction',
    },
    // Arrows
    navigation: {
      nextEl: '.feedback-next',
      prevEl: '.feedback-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      650: {
        slidesPerView: 2,
      },
      1205: {
        slidesPerView: 3,
      }
    }
  })
}