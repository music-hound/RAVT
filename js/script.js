// при нажатии на кнопку открывается окно отправки данных
$('.button').on('click', function() {
  $('.popup').addClass('popup_visible')
});

// окно отправки данных закрывается при нажатии на крестик
$('.popup_close').on('click', function() {
  $('.popup').removeClass('popup_visible')
});

// окно отправки данных закрывается при нажатии в области за ее пределами
$('.popup')
  .click(function(){
    $('.popup').removeClass('popup_visible')
  })
  .children()
  .click(function(e){
    e.stopPropagation();
  });

// добавление класса для появлении стрелки вверх
if($(window).scrollTop() > 50) {
    $('.arrow').addClass('arrow_visible');
}

// стрелка (появляется/исчезает) при скролле вниз-вверх
$(window).scroll(function(){
  if($(this) .scrollTop() > 50){
      $('.arrow').addClass('arrow_visible');
  } else {
      $('.arrow').removeClass('arrow_visible');
    }
});

// скролл наверх по нажатии на стрелку
$('.arrow').on('click', function() {
  $("html, body").animate({scrollTop:0},600);
  return false;
});

// ссылка на 4 ключевых направления, ведет на слайдер
$('.text_link').on('click',function (){
  var destination = $('#slider_start').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Каталог, ведет на слайдер
$('#catalogue').on('click',function (){
  var destination = $('#slider_start').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Замена стекла, ведет на слайдер
$('#windsheild_replacement').on('click',function (){
  var destination = $('#slider_start').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Ремонт стекла, ведет на слайдер
$('#windsheild_repair').on('click',function (){
  var destination = $('#slider_start').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Гарантии, ведет на слайдер
$('#guaranty').on('click',function (){
  var destination = $('#slider_start').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Страховым компания, ведет на форму
$('#insurance_companies').on('click',function (){
  var destination = $('#feedback_form').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// ссылка Контакты, ведет на контакты и карту
$('#contacts_id').on('click',function (){
  var destination = $('#contacts_block').offset().top; 
  $('html, body').animate({ scrollTop: destination }, 1000);
  return false;
});

// открытие политики по клику на ссылку 
$('.policy_click').on('click', function(){
  $('.conf-policy').addClass('conf-policy-visible');
});

// закрытие политики по клику на крестик
$('.conf-close').on('click', function(){
$('.conf-policy').removeClass('conf-policy-visible');
});

// закрытие политики по клику в областе вне окна
$(document).click(function(e){
if ($(e.target).is('.conf-policy'))
$('.conf-policy').removeClass('conf-policy-visible')
})

$('.burger').on('click', function(){
  if($('.menu-mobile').hasClass('menu-mobile_visible')){
      $('.menu-mobile').removeClass('menu-mobile_visible');
  }   else {
          $('.menu-mobile').addClass('menu-mobile_visible');
  }
});

// menu-mobile закрывается при нажатии в области за ее пределами
$('.menu-mobile')
  .click(function(){
    $('.menu-mobile').removeClass('menu-mobile_visible')
  })
  .children()
  .click(function(e){
    e.stopPropagation();
  });

  // header background (появляется/исчезает) при скролле вниз-вверх
$(window).scroll(function(){
  if($(this) .scrollTop() > 50){
      $('.hdrow').addClass('hdrowbg');
  } else {
      $('.hdrow').removeClass('hdrowbg');
    }
});

  // header background (появляется/исчезает) при скролле вниз-вверх
  $(window).scroll(function(){
    if($(this) .scrollTop() > 50){
        $('.list_white').addClass('list_white_bg');
    } else {
        $('.list_white').removeClass('list_white_bg');
      }
  });