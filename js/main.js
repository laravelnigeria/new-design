$(document).ready(function() {
  $("#first-dropdown").on("hide.bs.dropdown", function() {
    $(".change").html('How To Share This Article?<span class="caret"></span>');
  });
  $("#first-dropdown").on("show.bs.dropdown", function() {
    $(".change").html(
      'How To Share This Article?<span class="caret caret-up"></span>'
    );
  });

  $("#second-dropdown").on("hide.bs.dropdown", function() {
    $(".second-change").html(
      'How To Sign Up For An Account?<span class="caret"></span>'
    );
  });
  $("#second-dropdown").on("show.bs.dropdown", function() {
    $(".second-change").html(
      'How To Sign Up For An Account?<span class="caret caret-up"></span>'
    );
  });
});
