$(document).ready(function () {

  // FitVids plugin


    // Target your .container, .wrapper, .post, etc.
    $("figure.vimeo").fitVids();
    console.log("video");



  // Flexslider plugin

  $('#slider').flexslider({
    controlsContainer: "flexslider-controls",
    manualControls: ".flexslider-nav li img",
    animation: "fade",
    controlNav: true,
    animationLoop: true,
    slideshow: true,
    directionNav: false,
    smoothHeight: true,
    pauseOnHover: true
  });

  // CounterUp plugin

  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

  // wow.js
  new WOW().init();
})
