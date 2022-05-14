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

// function openModal() {
//   const modal = $(".modal");

//   if (!modal.hasClass("visible")) {
//     modal.addClass("visible");
//     modal.fadeIn();
//     $("body").addClass("stop-scrolling");
//     $("body").bind("touchmove", function (e) {
//       e.preventDefault();
//     });
//   } else {
//     modal.removeClass("visible");
//     modal.fadeOut();
//     $("body").removeClass("stop-scrolling");
//     $("body").unbind("touchmove");
//   }
// }
