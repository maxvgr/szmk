/* Прописываются все инициализации и первичные параметры для скриптов */

import LazyLoad from 'vanilla-lazyload';
import MicroModal from 'micromodal';

export const lazyImageController = new LazyLoad({
  elements_selector: '.lazy__item',

  callback_loaded: (trigger) => {
    const container = trigger.closest('.lazy');
    container.classList.remove('lazy--preloader');
  },
});

export const lazyBackgroundController = new LazyLoad({
  elements_selector: '.lazy-bg',
});

MicroModal.init();