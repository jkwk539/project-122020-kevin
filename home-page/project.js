$(function() {
  $(".header").css({
    "background-color": "yellow",
    'color': "purple",
    'padding': "80px"
  });
  $(".header").hover(function() {
    $(".work").animate(
      {
        'fontSize': "35px"
      },
      "slow"
    );
  });
  $(".work").css({ "background-color": "orange" });
});
