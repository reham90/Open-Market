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

 

  ///////// ** upload images ** /////////



  ImgUpload();


  function ImgUpload() {
      var imgWrap = "";
      var imgArray = [];

      $('.upload__inputfile').each(function() {
          $(this).on('change', function(e) {
              imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
              var maxLength = $(this).attr('data-max_length');

              var files = e.target.files;
              var filesArr = Array.prototype.slice.call(files);
              var iterator = 0;
              filesArr.forEach(function(f, index) {

                  if (!f.type.match('image.*')) {
                      return;
                  }

                  if (imgArray.length > maxLength) {
                      return false
                  } else {
                      var len = 0;
                      for (var i = 0; i < imgArray.length; i++) {
                          if (imgArray[i] !== undefined) {
                              len++;
                          }
                      }
                      if (len > maxLength) {
                          return false;
                      } else {
                          imgArray.push(f);

                          var reader = new FileReader();
                          reader.onload = function(e) {
                              var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                              imgWrap.append(html);
                              iterator++;
                          }
                          reader.readAsDataURL(f);
                      }
                  }
              });
          });
      });

      $('body').on('click', ".upload__img-close", function(e) {
          var file = $(this).parent().data("file");
          for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i].name === file) {
                  imgArray.splice(i, 1);
                  break;
              }
          }
          $(this).parent().parent().remove();
      });
  }

  $('input[type=file]').change(function() {
      var filename = $(this).val().split('\\').pop();
      var idname = $(this).attr('id');
      console.log($(this));
      console.log(filename);
      console.log(idname);
      $('label').find('span').html(filename);

  });




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