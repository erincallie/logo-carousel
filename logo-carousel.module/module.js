$(function() {
  const init_carousels = function() {
    const carousels = $(".owl-carousel");
    carousels.each(function() {
      let autoplay = $(this).attr("data-autoplay"),
          delay = $(this).attr("data-delay"),
          desktop_items = $(this).attr("data-desktop-items"),
          tablet_items = $(this).attr("data-tablet-items"),
          mobile_items = $(this).attr("data-mobile-items");
      $(this).owlCarousel({
        loop:true,
        margin:60,
        nav: false,
        responsiveClass:true,
        autoplay:autoplay,
        autoplayTimeout:delay,
        autoplayHoverPause:true,
        responsive:{
          0:{
            items:mobile_items
          },
          600:{
            items:tablet_items
          },
          1000:{
            items:desktop_items
          }
        }
      });
    });
  };
  init_carousels();
});