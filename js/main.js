$('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 500,
    dots:true,
    prevArrow: $('.slider_nav_left'),
    nextArrow: ('.slider_nav_right'),
    dotsClass: 'slider_dots'
  });