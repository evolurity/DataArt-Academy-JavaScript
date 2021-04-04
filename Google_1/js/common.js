$(function () {
  $("#hamburger").click(function () {
    $(this).toggleClass("is-active");

    if ($(this).hasClass("is-active")) {
      $("#services_window").slideDown(300);
    } else {
      $("#services_window").slideUp(300);
    }
  });

  $(document).on("click", function (e) {
    var container = $("#hamburger, #services_window");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $("#hamburger").toggleClass("is-active");
      $("#services_window").slideUp(300);
    }
  });
});
