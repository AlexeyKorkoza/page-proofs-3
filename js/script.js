$(".main-slider .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  responsiveClass: true,
  mouseDrag: false,
  touchDrag: false,
  pullDrag: false,
  autoplay: true,
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    900: {
      items: 1
    }
  }
});

$(".main-slider .owl-prev").empty();
$(".main-slider .owl-next").empty();