$(document).ready(function () {
  if ($(".header-slider").length) {
    $(".header-slider").slick({
      dots: false,
      arrows: true,
    });
  }

  $('[data-toggle="tooltip"]').tooltip();

  if($('.offers-slider').length){
    $('.offers-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }


  if($('.clients-slider').length){
    $('.clients-slider').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 5,
      arrows: false,
      slidesToScroll: 1,
      autoplay: true,
      loop: true,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }


});

