console.log("hello");

$(document).ready(function() {
  console.log("hello");
  $(".dropdown").on("hide.bs.dropdown", function() {
    console.log("i am working");
    $(".btn").html('Dropdown <span class="caret"></span>');
  });
  $(".dropdown").on("show.bs.dropdown", function() {
    console.log("i am working");
    $(".btn").html('Dropdown <span class="caret caret-up"></span>');
  });
});
