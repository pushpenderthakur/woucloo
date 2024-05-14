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

$('.filter-box a').click(function() {
  $('.featured-fislter-box').toggle('slow');
});

document.addEventListener("DOMContentLoaded", function() {
  const askTraderButtons = document.querySelectorAll(".btn-Seashell.ask-trader");
  const popupProducts = document.querySelectorAll(".popup-product");
  const closeAskTradeButtons = document.querySelectorAll(".close-ask-trade");

  askTraderButtons.forEach((button, index) => {
      button.addEventListener("click", function(event) {
          event.preventDefault(); // Prevent the default behavior of the anchor tag
          
          // Hide all popup products
          popupProducts.forEach(popup => {
              popup.style.display = "none";
          });

          // Show the corresponding popup product
          popupProducts[index].style.display = "block";
      });
  });

  closeAskTradeButtons.forEach((button, index) => {
      button.addEventListener("click", function(event) {
          event.preventDefault();
          popupProducts[index].style.display = "none";
      });
  });
});