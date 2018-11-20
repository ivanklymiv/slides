$(document).ready(function(){
  $('.ba-slider').slick({
   "slidesToShow": 1, "slidesToScroll": 1,
   infinite: true,
   "dots": true,
    nextArrow: '.ba-next',
  	prevArrow: '.ba-prev',
  	slide: 'span'
  });
});