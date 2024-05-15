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
    return false;
});

$('.filter-box a').click(function() {
  $('.featured-fislter-box').toggle('slow');
  return false;
});

$('.condition-box .head a').click(function() {
  $('.condition-box .box').toggle('slow');
  return false;
});
$('.price-box .head a').click(function() {
  $('.price-box .box').toggle('slow');
  return false;
});
$('.rating-box .head a').click(function() {
  $('.rating-box .box').toggle('slow');
  return false;
});
$('.region-box .head a').click(function() {
  $('.region-box .box').toggle('slow');
  return false;
});

$('.tag-box .head a').click(function() {
  $('.tag-box .box').toggle('slow');
  return false;
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
// Price range slider
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 50;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});
