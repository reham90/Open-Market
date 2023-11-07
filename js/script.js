$(window).on('load', function() {
  $(".preloader").fadeOut();

});
$(document).ready(function() {
  new WOW().init();

  //phone size menu onclick
  if ($(window).width() <= 991) {
      $("#menu-id").click(function(e) {
          e.preventDefault();
          $('.menu-bars .bar').toggleClass('hide-icon');
          $('.menu-bars .times').toggleClass('hide-icon');
          $(".navgition").toggleClass("reset-left");
          $("body").toggleClass("overflow");

      });
      $(".nav-head .close-btn").click(function() {
          $(".navgition").removeClass("reset-left");
          $(".menu-bars .bars").toggleClass("open-bars");
          $(".menu-bars .bars").toggleClass("close-bars");
          $("body").removeClass("overflow");
      });




     
  };

  //fixed nav
//   $stickyNav = $(".top-header");
//   $(window).scroll("scroll load", function() {
//       var scroll = $(window).scrollTop();
//       if (scroll >= 112) {
//           $stickyNav.addClass("fixed-nav", 500);
//       } else {
//           $stickyNav.removeClass("fixed-nav", 500);
//       }
//       if (scroll == 0) {
//           $stickyNav.removeClass("fixed-nav", 500);
//       }
//   });
//   var $stickyheader = $("header");
//   lastScroll = 0;
//   $(window).scroll("scroll load", function() {
//       var scroll = $(window).scrollTop();
//       if (lastScroll - scroll > 0) {
//           $stickyheader.addClass("fixed-header", {
//               duration: 1000
//           });
//       } else if (lastScroll - scroll >= 0 && $(window).width() <= 991) {
//           $stickyheader.addClass("fixed-header", {
//               duration: 1000
//           });
//       } else {
//           $stickyheader.removeClass("fixed-header", {
//               duration: 500
//           });
//       }
//       lastScroll = scroll;
//       if (scroll == 0) {
//           $stickyheader.removeClass("fixed-header", {
//               duration: 500
//           });
//       }
//   });

 

  ///////// **chart ** /////////



  ////////////** footer transfer into accordion **//////////

  if ($(window).width() <= 767) {
      $('.nav-foot-header').addClass('footer-accordion');
      $('.nav-foot').addClass('footer-panel');
  }
  $('.footer-accordion').click(function() {
      const x = `${$(this).siblings().prop('scrollHeight') + 15}px`;
      $('.footer-accordion').not(this).removeClass('active');
      $(this).toggleClass('active');
      if ($(this).siblings().css('max-height') == '0px') {
          $(this).siblings().css('max-height', x);
          $(this).siblings('.nav-foot').css('padding-top', '15px');
      } else {
          $(this).siblings().css('max-height', '0');
          $(this).siblings('.nav-foot').css('padding-top', '0');
      }

      $('.footer-accordion').not(this).siblings().css('max-height', '0');
      $('.footer-accordion')
          .not(this)
          .siblings('.nav-foot')
          .css('padding-top', '0');
  });
  //////////** fixed arrow to top**//////////
  $(".arrow-top").click(function() {
      $("html,body").animate({
              scrollTop: 0,
          },
          1500
      );
  });
  $(this).scrollTop() >= 500 ?
      $(".arrow-top").fadeIn(300) :
      $(".arrow-top").fadeOut(300);

  $(window).scroll(function() {
      $(this).scrollTop() >= 500 ?
          $(".arrow-top").fadeIn(300) :
          $(".arrow-top").fadeOut(300);
  })



});