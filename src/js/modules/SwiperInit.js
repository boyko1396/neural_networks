import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) {
    return;
  }

  const swiper = new Swiper(sliderElement, {
    fade: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoHeight: true,
    navigation: {
      nextEl: params.nextEl,
      prevEl: params.prevEl,
    },
    ...params.settings,
  });

  return swiper;
}

function initializeAllSliders() {
  const professionSliderParams = {
    nextEl: '.js-swiper-button-next-1',
    prevEl: '.js-swiper-button-prev-1',
  };

  const clientSliderParams = {
    nextEl: '.js-swiper-button-next-2',
    prevEl: '.js-swiper-button-prev-2',
  };

  const programsSliderParams = {
    nextEl: '.js-swiper-button-next-3',
    prevEl: '.js-swiper-button-prev-3',
  };

  const benefitsSliderParams = {
    nextEl: '.js-swiper-button-next-4',
    prevEl: '.js-swiper-button-prev-4',
  };

  const reviewsSliderParams = {
    nextEl: '.js-swiper-button-next-5',
    prevEl: '.js-swiper-button-prev-5',
  };

  SliderInit('.js-slider-init-1', professionSliderParams);
  SliderInit('.js-slider-init-2', clientSliderParams);
  SliderInit('.js-slider-init-3', programsSliderParams);
  SliderInit('.js-slider-init-4', benefitsSliderParams);
  SliderInit('.js-slider-init-5', reviewsSliderParams);
}

document.addEventListener('DOMContentLoaded', initializeAllSliders);

export default initializeAllSliders;