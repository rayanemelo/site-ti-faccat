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
