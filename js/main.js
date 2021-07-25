/* =====================================
      Parallax
   ====================================== */

   if ($(window).width() > 992) {
    $(".parallax").parallaxie({
        speed: 0.55,
        offset:-100,
    });
}

if ($(window).width() > 992) {
    $(".parallax1").parallaxie({
        speed: 0.55,
        offset:-150,
    });
}

/* =====================================
      Scroll to top
   ====================================== */

(function($) {
	"use strict"

	  var btn = $('.scroll-to-top');  

	   btn.on('click', function(e) {
	     e.preventDefault();
	     $('html, body').animate({scrollTop:0}, 1000);
	   });
});

/* =====================================
      Scroll on section
   ====================================== */
   $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 1000);
    return false;
  });


/* =====================================
      Slick slider
====================================== */
  $(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ],
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next')
    });
});