import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const initAdvantagesSlider = () => {
  const advantagesContainer = document.querySelector('.advantages__slider');
  const advantagesControl = document.querySelector('.advantages__arrows');

  advantagesControl.removeAttribute('data-nojs');

  const advantagesSlider = new Swiper(advantagesContainer, {
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
        spaceBetween: 25,
      },

      300: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },

    navigation: {
      nextEl: '.advantages__arrows-next',
      prevEl: '.advantages__arrows-prev',
    },
    pagination: {
      el: '.advantages__pagination',
      clickable: true,
      dynamicMainBullets: 4,
      type: 'bullets',
    },
  });

  return advantagesSlider;
};

export {initAdvantagesSlider};
