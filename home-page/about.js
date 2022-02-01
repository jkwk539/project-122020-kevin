(function(){
  $("#panel").css({"background-color": "yellow", "color": "purple", "display":"none","text-align":"center", 'padding':'20px'});
  $(".about-section").hover(function(){
    $('#panel').slideToggle();
  })
})

/* Open when someone clicks on the span element */
(function openNav() {
  document.getElementById("myNav").style.width = "100%";
})

/* Close when someone clicks on the "x" symbol inside the overlay */
(function closeNav() {
  document.getElementById("myNav").style.width = "0%";
})