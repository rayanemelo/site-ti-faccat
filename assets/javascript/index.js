$(".menu-button").click(openMenu);

function openMenu() {
  const menu = $(".menu-vertical");

  if (!menu.hasClass("visible")) {
    menu.addClass("visible");
    menu.fadeIn();
  } else {
    menu.removeClass("visible");
    menu.fadeOut();
  }
}

$('.carousel').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
});