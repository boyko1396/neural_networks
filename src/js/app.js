/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

// support webp, identify device
import BaseHelpers from './helpers/BaseHelpers.js';
import initializeAllSliders from './modules/SwiperInit.js';

BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // slider init
  initializeAllSliders();

  // video remove contols
  var videos = document.querySelectorAll('.js-video-controls-remove');

  videos.forEach(function(video) {
    video.removeAttribute('controls');
    video.addEventListener('loadeddata', function() {
      video.removeAttribute('controls');
    });

    video.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
    });

    var exitFullscreen = function() {
      if (document.fullscreenElement === video) {
        document.exitFullscreen();
      } else if (document.webkitFullscreenElement === video) {
        document.webkitExitFullscreen();
      } else if (document.mozFullScreenElement === video) {
        document.mozCancelFullScreen();
      } else if (document.msFullscreenElement === video) {
        document.msExitFullscreen();
      }
    };

    video.addEventListener('fullscreenchange', exitFullscreen);
    video.addEventListener('webkitfullscreenchange', exitFullscreen);
    video.addEventListener('mozfullscreenchange', exitFullscreen);
    video.addEventListener('msfullscreenchange', exitFullscreen);

    video.addEventListener('webkitbeginfullscreen', function(event) {
      event.preventDefault();
    });

    video.addEventListener('webkitendfullscreen', function(event) {
      event.preventDefault();
    });
  });
});