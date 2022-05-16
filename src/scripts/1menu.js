jQuery(document).ready(function () {
  jQuery(".menu-item-has-children").click(function (event) {
    if (window.matchMedia("(max-width: 1199px)").matches) {
      $(".menu-item-has-children ul").scrollTop(0);
      jQuery(this).addClass("active");
      jQuery(".menu-item-has-children").removeClass("scrolling");
      var ultimo = jQuery(".menu-item-has-children.active");
      ultimo = ultimo[ultimo.length - 1];
      jQuery(ultimo).addClass("scrolling");
      jQuery(".menu-item-has-children > a").attr("href", "#");
    }
  });
});

jQuery(document).ready(function () {
  $(".menu-item-has-children .sub-menu").prepend(
    "<li class='menu-item hide-desk rmv-menu'><a class='remove-menu'><i>∟</i> Voltar</a></li>"
  );
});
jQuery(document).ready(function () {
  jQuery(".remove-menu").click(function () {
    if (window.matchMedia("(max-width: 1199px)").matches) {
      var mainn = $(this).parent().parent().parent();
      jQuery(mainn).removeClass("active");
      jQuery(".menu-item-has-children").removeClass("scrolling");
      var ultimo = jQuery(".menu-item-has-children.active");
      ultimo = ultimo[ultimo.length - 1];
      jQuery(ultimo).addClass("scrolling");
      return false;
    }
  });
});

jQuery(document).ready(function () {
  $("#menu-toggle").click(function (event) {
    $(this).toggleClass("active");
    $(".slider-menu").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
    jQuery(".menu-item-has-children").removeClass("active");
    jQuery(".menu-item-has-children").removeClass("scrolling");
    event.preventDefault();
  });
  if (window.matchMedia("(max-width: 1199px)").matches) {
    window.scrollTo(0, $(".menu-menu-principal-container").offset().top);
  }
});
