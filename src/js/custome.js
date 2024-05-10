$('.main-slider').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    speed: 700,
    arrows: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.product-slider').slick({
    infinite: true,
    dots: false,
    autoplay: false,
    speed: 700,
    arrows: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  $('.toggle-box a').click(function() {
    $('.menu-box').toggle('slow');
});