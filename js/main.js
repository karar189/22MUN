(function ($) {
"use strict";

// // preloader
// function preloader() {
// 	$('#preloader').delay(0).fadeOut();
// };

// $(window).on('load', function () {
// 	preloader(),
// 	wowanimation();
// });


// One Page Nav
var top_offset = $('.header-area').height() + 80;
$('.main-menu nav ul').onePageNav({
	currentClass: 'active',
	scrollOffset: top_offset,
});


// menu toggle
$(".navbar-toggle").on('click', function () {
	$(".navbar-nav").addClass("mobile_menu");
});
$(".navbar-nav li a").on('click', function () {
	$(".navbar-collapse").removeClass("show");
});


// sticky-menu
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 245) {
		$("#header-sticky").removeClass("sticky-menu");
	} else {
		$("#header-sticky").addClass("sticky-menu");
	}
});


// countdown
$('[data-countdown]').each(function () {
	var $this = $(this), finalDate = $(this).data('countdown');
	$this.countdown(finalDate, function (event) {
		$this.html(event.strftime('<div class="time-count">%D <span>Days</span></div><div class="time-count">%H <span>Hours</span></div><div class="time-count">%M <span>minutes</span></div><div class="time-count">%S <span>seconds</span></div>'));
	});
});


// offcanvas menu
$(".menu-tigger").on("click", function () {
	$(".extra-info,.offcanvas-overly").addClass("active");
	return false;
});
$(".menu-close,.offcanvas-overly").on("click", function () {
	$(".extra-info,.offcanvas-overly").removeClass("active");
});


// mainSlider
function mainSlider() {
	var BasicSlider = $('.slider-active');
	BasicSlider.on('init', function (e, slick) {
		var $firstAnimatingElements = $('.single-slider:first-child').find('[data-animation]');
		doAnimations($firstAnimatingElements);
	});
	BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
		var $animatingElements = $('.single-slider[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
		doAnimations($animatingElements);
	});
	BasicSlider.slick({
		autoplay: false,
		autoplaySpeed: 10000,
		dots: false,
		fade: true,
		arrows: false,
		responsive: [
			{ breakpoint: 767, settings: { dots: false, arrows: false } }
		]
	});

	function doAnimations(elements) {
		var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		elements.each(function () {
			var $this = $(this);
			var $animationDelay = $this.data('delay');
			var $animationType = 'animated ' + $this.data('animation');
			$this.css({
				'animation-delay': $animationDelay,
				'-webkit-animation-delay': $animationDelay
			});
			$this.addClass($animationType).one(animationEndEvents, function () {
				$this.removeClass($animationType);
			});
		});
	}
}
mainSlider();


// about-active
$('.about-active').slick({
  dots: false,
  arrows: false,
  infinite: true,
  fade: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// testimonial-active
$('.testimonial-active').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  prevArrow: '<button type="button" class="slick-prev"><span></span>prev</button>',
  nextArrow: '<button type="button" class="slick-next">next<span></span></button>',
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				arrows: false,
			}
		},
	]
});


// brand-active
$('.brand-active').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
  ]
});


$('.speaker-active').owlCarousel({
    center: false,
    items: 4,
    loop: true,
    margin: 0,
    responsive:{
		0: {
			items: 1,
			center: false,
		},
		575: {
			items: 2,
			center: false,
		},
		768: {
			items: 2,
			center: false,
		},
		992: {
			items: 3,
			center: false,
		},
		1200: {
			items: 4
		},
    }
});


// tooltip
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


// datepicker
$(function () {
	$("#datepicker").datepicker({
		autoclose: true,
		todayHighlight: true
	}).datepicker('update', new Date());
});


// counterUp
$(".count").counterUp({
	delay: 10,
	time: 1000
});


/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});



/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});



// isotop
$('.gallery-active').imagesLoaded( function() {
	// init Isotope
	var $grid = $('.gallery-active').isotope({
	  itemSelector: '.grid-item',
	  percentPosition: true,
	  masonry: {
		// use outer width of grid-sizer for columnWidth
		  columnWidth: 1,
	  }
	});
	// filter items on button click
	$('.portfolio-menu').on('click', 'button', function () {
		var filterValue = $(this).attr('data-filter');
		$grid.isotope({ filter: filterValue });
	});
});



//for menu active class
$('.portfolio-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
});



// owlCarousel
$('.schedule-barnd-active').owlCarousel({
	loop: false,
	margin: 15,
	items: 5,
	autoplay: false,
	autoplayTimeout: 5000,
	autoplaySpeed: 1000,
	nav: false,
	dots: false,
	responsive: {
		0: {
			items: 1,
			center: false,
		},
		575: {
			items: 3,
			center: false,
		},
		768: {
			items: 3,
			center: false,
		},
		992: {
			items: 4,
			center: false,
		},
		1200: {
			items: 5
		},
	}
})


// scrollToTop
$.scrollUp({
	scrollName: 'scrollUp', // Element ID
	topDistance: '300', // Distance from top before showing element (px)
	topSpeed: 300, // Speed back to top (ms)
	animation: 'fade', // Fade, slide, none
	animationInSpeed: 200, // Animation in speed (ms)
	animationOutSpeed: 200, // Animation out speed (ms)
	scrollText: '<i class="fas fa-chevron-up"></i>', // Text for element
	activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
});

// aos-active
AOS.init({
	duration: 1000,
	mirror: true
});

// WOW active
function wowanimation() {
	var wow = new WOW({
		boxClass: 'wow',
		animateClass: 'animated',
		offset: 0,
		mobile: false,
		live: true
	});
	wow.init();
}


})(jQuery);