import Swiper from '../../vendor/swiper.js';
import {isMobile} from '../../utils/is-mobile.js';

const initGlobalPlayerSlider = () => {
  const globalPlayerContainer = document.querySelector('.global-player__wrapper');
  const globalPlayerControl = document.querySelector('.global-player__arrows');

  globalPlayerControl.removeAttribute('data-nojs');

  let globalPlayerSlider = new Swiper(globalPlayerContainer, {
    // cssMode: true,
    allowTouchMove: isMobile(),
    slidesPerView: 'auto',
    observer: true,
    observeParents: true,
    speed: 300,

    breakpoints: {
      1340: {
        enabled: false, // Отключаем слайдер
      },

      1020: {
        enabled: false, // Отключаем слайдер
      },

      700: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      300: {
        slidesPerView: 1,
        // spaceBetween: 25,
      },
    },

    navigation: {
      nextEl: '.global-player__arrows-next',
      prevEl: '.global-player__arrows-prev',
    },
    pagination: {
      el: '.global-player__pagination',
      clickable: true,
      dynamicMainBullets: 4,
      type: 'bullets',
    },
  });

  return globalPlayerSlider;
};

export {initGlobalPlayerSlider};
