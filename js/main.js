$(document).ready(function() {
  $("#first-dropdown").on("hide.bs.dropdown", function() {
    $(".btn").html('Dropdown <span class="caret"></span>');
  });
  $("#first-dropdown").on("show.bs.dropdown", function() {
    $(".btn").html('Dropdown <span class="caret caret-up"></span>');
  });
});
