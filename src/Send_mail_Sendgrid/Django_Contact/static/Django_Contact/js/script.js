//Typewriter Effect
new TypeIt('#typewriter', {
  strings: ['Hello! I\'m Priya Sharma.',
             'I\'m a Web Developer and enthusiastic programmer.'],
  speed: 50,
  
  waitUntilVisible: true,
  cursor: false,
  lifeLike: true,
  loop: false
}).pause(1000)
.go();

new TypeIt('#phoneNumber', {
  strings: "+234 9035 394 858",
  waitUntilVisible: true,
  cursor: true,
  lifeLike: true,
  speed: 100,
}).go();



// Carousel
var $myCarousel = $('#myCarousel');

// Initialize carousel
$myCarousel.carousel();


function doAnimations(elems) {
  var animEndEv = 'webkitAnimationEnd animationend';

  elems.each(function () {
    var $this = $(this),
        $animationType = $this.data('animation');

    // Add animate.css classes to
    // the elements to be animated
    // Remove animate.css classes
    // once the animation event has ended
    $this.addClass($animationType).one(animEndEv, function () {
      $this.removeClass($animationType);
    });
  });
}

// Select the elements to be animated
// in the first slide on page load
var $firstAnimatingElems = $myCarousel.find('.carousel-item:first')
  .find('[data-animation ^= "animated"]');

// Apply the animation using the doAnimations()function
doAnimations($firstAnimatingElems);

// Attach the doAnimations() function to the
// carousel's slide.bs.carousel event
$myCarousel.on('slide.bs.carousel', function (e) {
  // Select the elements to be animated inside the active slide
  var $animatingElems = $(e.relatedTarget)
    .find("[data-animation ^= 'animated']");
  doAnimations($animatingElems);
});

