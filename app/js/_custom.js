document.addEventListener('DOMContentLoaded', function () {
  initServicesSlider();
  initAccordion();
  initScrollAnimation();
});

const initScrollAnimation = () =>{
  new WOW().init();
}

const initAccordion = () =>{
  let accordionContainer = document.querySelector('#accordion');
  if(window.innerWidth <= '768') {
    new Accordion('#accordion');
  } else{
    accordionContainer.classList.add('disabled');
  }
}

const initServicesSlider = () => {
    let slider = new Glide('.glide', {
      gap: 16,
      breakpoints: {
        480: {
          perView: 1.2
        },
        600: {
          perView: 1.8
        },
        768: {
          perView: 2.3
        },
        992: {
          perView: 2.5
        },
        1367: {
          perView: 3.1
        }
      }
    })
    let maxWidth = '1367';
    window.addEventListener('resize', () => {
      if (window.innerWidth >= maxWidth) {
        slider.destroy();
      }else{
        slider.mount()
      }
    });

  }

    