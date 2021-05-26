$(document).ready(function () {
  $('.venobox').venobox();
});
$("#firstlink").venobox().trigger('click');

$(window).on('load', function () {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function () {
    $('.venobox').venobox({
      'share': false
    });
  });
});

// $(document).ready(function () {
//   $(window).scroll(function () {
//     if ($(this).scrollTop() < 100) {
  
//       // $('header').removeClass('fixed-top');
//       $('header').removeClass('shadow-lg');
//       $('header').removeClass('custom-header');

//     } else {
  
//       // $('header').addClass('fixed-top');
//       $('header').addClass('shadow-lg');
//       $('header').addClass('custom-header');

//     }

//   })
// });
$(window).scroll(function() {
  if ($(this).scrollTop() > 100) {
    // $('#header').addClass('custom-header');
    $('#header').addClass('header-box');
    $('.header-box:hover::after').addClass('w-100');
    $('.theme-color.text-white.col-xl-4.col-lg-4.col-md-4.col-sm-4.d-flex.justify-content-center').addClass('animated-navbar');
    // $('#header').addClass('shadow-lg');
    
  } else {
    // $('#header').removeClass('custom-header');
    $('#header').removeClass('header-box');
    $('#header').addClass('w-100');
    $('.theme-color.text-white.col-xl-4.col-lg-4.col-md-4.col-sm-4.d-flex.justify-content-center').addClass('addtranstion');
    $('.theme-color.text-white.col-xl-4.col-lg-4.col-md-4.col-sm-4.d-flex.justify-content-center').removeClass('animated-navbar');
    // $('#header').removeClass('shadow-lg');
    
  }
});

if ($(window).scrollTop() > 100) {
  $('.theme-color.text-white.col-xl-4.col-lg-4.col-md-4.col-sm-4.d-flex.justify-content-center').addClass('animated-navbar');
  $('#header').addClass('header-box');
}


