$('.button').on('click', function() {
  $('.popup').addClass('popup_visible')
});
$('.popup_close').on('click', function() {
  $('.popup').removeClass('popup_visible')
});
$('.popup')
  .click(function(){
    $('.popup').removeClass('popup_visible')
  })
  .children()
  .click(function(e){
    e.stopPropagation();
  });