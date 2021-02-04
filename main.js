$(document).ready(function () {

     $('.menu-toggler').on('click', function () {
        $(this).toggleClass('open');
        $('.top-nav').toggleClass('open');
    });

    $('.top-nav .nav-link').on('click', function () {
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    });

    
    $(document).on("click", function(event){
        var $trigger = $(".menu-toggler");
        if($trigger !== event.target && !$trigger.has(event.target).length){
            $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
        }               
    });

    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },4500);

    AOS.init({
        easing: 'ease',
        duration: 1800,
        once: true
    });

});


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







