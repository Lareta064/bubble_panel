$(document).ready(function(){

    //плавная прокрутка
    $("a,nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id, a.mouse_scroll").mPageScroll2id({
      highlightSelector:"nav a"
  });

    $('#responsive-menu a').on('click', function(){
     $('#responsive-menu').removeClass('in')
    
   });

    /*поэкранная прокрутка
    $('#fullpage').fullpage();*/


});

//открываем поп 
$('.show_popup').click(function() { // Вызываем функцию по нажатию на кнопку 
    var popup_id = $('#' + $(this).attr("rel")); // Связываем rel и popup_id 
    $(popup_id).show(); // Открываем окно
    $('.overlay_popup').show(); // Открываем блок заднего фона
}) 
$('.overlay_popup').click(function() { // Обрабатываем клик по заднему фону
    $('.overlay_popup, .popup').hide(); // Скрываем затемнённый задний фон и основное всплывающее окно
});
//открываем поп 

/*animated*/
 wow = new WOW( {
     boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       100,          // через сколько пикселей сработает
    mobile:       false,       // default
    live:         true        // для мобильных оставить или убрать анимацию
  }
  )
  wow.init();
   new WOW().init();


   //slider owl-carousel
$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  navText: ['<i class="fa fa-angle-left fa-2x" aria-hidden="true"></i>',
              '<i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'],
    autoplay:true, // автопрокрутка
    smartSpeed: 3000,
    autoplayTimeout:4000, // задержка в мс
  });  
});