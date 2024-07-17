import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

function SliderInit(sliderSelector, params) {
  const sliderElement = document.querySelector(sliderSelector);

  if (!sliderElement) {
    return;
  }

  const swiper = new Swiper(sliderElement, {
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
    settings: {}
  };

  const clientSliderParams = {
    nextEl: '.js-swiper-button-next-2',
    prevEl: '.js-swiper-button-prev-2',
    settings: {}
  };

  const programsSliderParams = {
    nextEl: '.js-swiper-button-next-3',
    prevEl: '.js-swiper-button-prev-3',
    settings: {}
  };

  const benefitsSliderParams = {
    nextEl: '.js-swiper-button-next-4',
    prevEl: '.js-swiper-button-prev-4',
    settings: {}
  };

  const reviewsSliderParams = {
    nextEl: '.js-swiper-button-next-5',
    prevEl: '.js-swiper-button-prev-5',
    settings: {}
  };

  const marqueeSliderParams = {
    nextEl: '',
    prevEl: '',
    settings: {
      allowTouchMove: false,
      noSwiping: true,
      navigation: false
    }
  };

  const moduleTitleSliderParams = {
    nextEl: '',
    prevEl: '',
    settings: {
      allowTouchMove: false,
      noSwiping: true,
      navigation: false
    }
  };

  const programsSlider = SliderInit('.js-slider-init-3', programsSliderParams);
  const marqueeSlider = SliderInit('.js-slider-init-6', marqueeSliderParams);
  const moduleTitleSlider = SliderInit('.js-slider-init-7', moduleTitleSliderParams);

  if (programsSlider && marqueeSlider && moduleTitleSlider) {
    programsSlider.on('slideChange', () => {
      marqueeSlider.slideTo(programsSlider.activeIndex);
      moduleTitleSlider.slideTo(programsSlider.activeIndex);
    });

    marqueeSlider.on('slideChange', () => {
      programsSlider.slideTo(marqueeSlider.activeIndex);
      moduleTitleSlider.slideTo(marqueeSlider.activeIndex);
    });

    moduleTitleSlider.on('slideChange', () => {
      programsSlider.slideTo(moduleTitleSlider.activeIndex);
      marqueeSlider.slideTo(moduleTitleSlider.activeIndex);
    });
  }

  SliderInit('.js-slider-init-1', professionSliderParams);
  SliderInit('.js-slider-init-2', clientSliderParams);
  SliderInit('.js-slider-init-4', benefitsSliderParams);
  SliderInit('.js-slider-init-5', reviewsSliderParams);
}

document.addEventListener('DOMContentLoaded', initializeAllSliders);

export default initializeAllSliders;