window.onload = function(){

  var mac = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

  if (mac) {
    document.querySelector('body').classList.add('mac')
  }

  document.querySelector('.menu_opener').addEventListener('click',function(e){
    e.preventDefault();
    document.querySelector('body').classList.toggle('menu_opened')
  })
    
  var servicesSwiper = new Swiper(".services_slider .swiper", {
      slidesPerView: 3.2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".slider_navigation .slider_next",
        prevEl: ".slider_navigation .slider_prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2.7,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3.2,
          spaceBetween: 30,
        },
      },
  });

  var companiesSlider = new Swiper(".companies_slider .swiper", {
      slidesPerView: 5,
      spaceBetween: 75,
      loop: false,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      breakpoints: {
        0: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 5,
          spaceBetween: 48,
        },
        1400: {
          slidesPerView: 5,
          spaceBetween: 75,
        },
      },

  });

  var clientsSlider = new Swiper(".clients_slider .swiper", {
    slidesPerView: 5,
    spaceBetween: 80,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider_navigation .slider_next",
      prevEl: ".slider_navigation .slider_prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 48,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 75,
      },
    },

  });

  var projectsSlider = new Swiper(".projects_slider .swiper", {
    slidesPerView: 2,
    spaceBetween: 270,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".slider_navigation .slider_next",
      prevEl: ".slider_navigation .slider_prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1.15,
        spaceBetween: 100,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 340,
      },
      1200:{
        slidesPerView: 1.2,
        spaceBetween: 200,
      },
      1300: {
        slidesPerView: 2,
        spaceBetween: 180,
      },

      1500: {
        slidesPerView: 2,
        spaceBetween: 270,
      },
    },
  });
  let windowWith = (window.innerWidth > 0) ? window.innerWidth : screen.width;
  if(windowWith < 1300){
    document.querySelector('.how_works_right').classList.add('swiper')
    document.querySelector('.how_works_right .working_steps').classList.add('swiper-wrapper');

    let steps = document.querySelectorAll('.how_works_right .step_item');
    steps.forEach(function(v,i,a){
      v.classList.add('swiper-slide')
    })

    var stepsSlider = new Swiper(".how_works_right", {
      slidesPerView: 1.7,
      spaceBetween: 32,
      loop: false,
      navigation: {
        nextEl: ".slider_navigation .slider_next",
        prevEl: ".slider_navigation .slider_prev",
      },
  
      breakpoints: {
        0: {
          slidesPerView: 1.2,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 1.7,
          spaceBetween: 32,
        },
      },
    });

    window.onscroll = (e) => {
        console.log(window.pageYOffset)
    };
  }
}
