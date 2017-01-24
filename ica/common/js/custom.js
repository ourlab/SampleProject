$(window).load(function(){
   $('.owl-carousel').owlCarousel({
	  loop:true,
	  animateIn: 'fadeIn',
	  animateOut: 'fadeOut',
	  margin:0,
	  nav:false,
	  dots:true,
	  touchDrag  : false,
      mouseDrag  : false,
	  smartSpeed: 2000,
	  autoplay:true,
	  responsive:{
	   0:{
		items:1,
		
	   },
	   600:{
		items:1,
		
	   },
	   1000:{
		items:1
	   }
	  }
	  });

$('a.menuico').click(function(e) {
    e.preventDefault();
	$('body').toggleClass('show_sidebar');
	$(this).toggleClass('active');
});



var wid = $(window).width();
var ht = $('.slider').height();
$('.right-triangle').css('border-top-width', ht-300);
$('.right-triangle').css('border-left-width', wid);

});

