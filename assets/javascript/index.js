$(".menu-button").click(openMenu);
$(".modal-matriz").click(openModal);
$(".close-modal").click(openModal);
$(".fechar-modal").click(openModal);

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
