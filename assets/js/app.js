(function($){
  "use strict";

  $(window).on('load', function(){

    // menu options custom affix
    var fixed_top = $(".header");
    $(window).on("scroll", function(){
        if( $(window).scrollTop() > 50){  
            fixed_top.addClass("animated fadeInDown menu-fixed");
        }
        else{
            fixed_top.removeClass("animated fadeInDown menu-fixed");
        }
    });

    // mobile menu js
    $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
      let element = $(this).parent("li");
      if (element.hasClass("open")) {
        element.removeClass("open");
        element.find("li").removeClass("open");
      }
      else {
        element.addClass("open");
        element.siblings("li").removeClass("open");
        element.siblings("li").find("li").removeClass("open");
      }
    });

    // new WOW().init();
      
    // lightcase plugin init
    $('a[data-rel^=lightcase]').lightcase();

    let img=$('.bg_img');
    img.css('background-image', function () {
      let bg = ('url(' + $(this).data('background') + ')');
      return bg;
    });

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $('select').niceSelect();

    $('.winner-slider').slick({
      speed: 700,
      arrows: true,
      dots: false,
      nextArrow: '<div class="next"><i class="las la-long-arrow-alt-right"></i></div>',
      prevArrow: '<div class="prev"><i class="las la-long-arrow-alt-left"></i></div>',
    });

    $('.testimonial-slider').slick({
      autoplay: true,
      speed: 700,
      arrows: true,
      dots: false,
      arrows: false,
      vertical: true,
      verticalSwiping: true,
    });

  });

  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });
  
  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
  });

})(jQuery);