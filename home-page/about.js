$(function(){
  $("#panel").css({"background-color": "yellow", "color": "purple", "display":"none","text-align":"center", 'padding':'20px'});
  $(".about-section").hover(function(){
    $('#panel').slideToggle();
  })
})