$(document).ready(function () {
    $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });
    
    $('nav a[href*="#"]').on('click', function () {
      $('html, body').animate(keyframes= {
          scrollTop: $($(this).attr('href')).offset().top - 100
        }, options=2000); 
    });

    $('#up').on('click', function () {
        $('html, body').animate(keyframes= {
            scrollTop: 0
          }, options=2000); 
    });

    AOS.init({
        easing: 'ease',
        duration: 800,
        once: true
    });

});

//Typing Effect

const texts = ['websites!', 'games!', 'music!'];
let count = 0;
let index= 0;
let currentText = '';
let letter = '';

(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);
    
    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400)

}());






