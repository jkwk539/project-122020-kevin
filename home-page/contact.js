$(function(){
  $('.container').hover(function(){
    $('.container').animate({borderRadius:"100px"}, "slow", 
    function(){
      $('.container').animate({
        height:"100em"});
    });
  });
});