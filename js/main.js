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

$(function() {
  $("#speaker1").hover(function() {
    $("#number").text("01/06");
    $("#description").text("Designer");
    $("#name").text("Donald trump");
    $("#speakers-text").text(
      "“Art is not a handicraft, it is the transmission of feeling the artist has experienced.”"
    );
    $("#speaker-github").attr("href", "https://www.google.com");
  });

  $("#speaker2").hover(function() {
    $("#number").text("02/06");
    $("#description").text("Developer");
    $("#name").text("Neo Ighodaro");
    $("#speakers-text").text(
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus tincidunt odio ac gravida.”"
    );
    $("#speaker-github").attr("href", "https://www.google.com");
  });

  $("#speaker3").hover(function() {
    $("#number").text("03/06");
    $("#description").text("Developer");
    $("#name").text("Neo Ighodaro");
    $("#speakers-text").text(
      "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus tincidunt odio ac gravida.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tempus tincidunt odio ac gravida.”"
    );
    $("#speaker-github").attr("href", "https://www.google.com");
  });
});

if ($(window).width() <= 700) {
  $(function() {
    $("#speaker1, #modal-background, #modal-close").click(function() {
      $("#modal-content, #modal-background").toggleClass("active");
    });
  });
}

$("#sponsor1").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo1-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo1.png)");
  }
);

$("#sponsor2").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo2-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo2.png)");
  }
);

$("#sponsor3").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo3-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo3.png)");
  }
);

$("#sponsor4").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo4-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo4.png)");
  }
);

$("#sponsor5").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo5-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo5.png)");
  }
);

$("#sponsor6").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo6-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo6.png)");
  }
);

$("#sponsor7").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo7-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo7.png)");
  }
);

$("#sponsor8").hover(
  function() {
    $(this).css("background-image", "url(./src/logos/logo8-dark.png)");
  },
  function() {
    $(this).css("background-image", "url(./src/logos/Logo8.png)");
  }
);
