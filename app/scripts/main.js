$(document).ready(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 120) {
            $('#menu-header').addClass('fixed');
            $('#logo-principal').attr('src','images/logo-deitada.png');
        } else {
            $('#menu-header').removeClass('fixed');
            $('#logo-principal').attr('src','images/logo.png');
        }
    });
    $('.scrollTo').on('click', function (e) {
        e.preventDefault();
        var target = $(this).attr('href');
        var elemento = $('#menu-header').hasClass('fixed');
    if (elemento) {
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 60)
        }, 500);
    } else {
        $('html, body').animate({
            scrollTop: ($(target).offset().top - 170)
        }, 500);
    }
    $('.overlay').removeClass('open');

    });

    function abreMenu(){
        $('.overlay').toggleClass('open');
        alert('teste');
    }


    window.sr = ScrollReveal({ reset: true });
    sr.reveal('.cartao-container',{ duration: 1000 });
    sr.reveal('#degrade',{ duration: 800 });
    sr.reveal('#menu-header',{ duration: 800 });

    function parallax() {
        var $slider = document.getElementById('sec-2');
        var yPos = window.pageYOffset / $slider.dataset.speed;
        yPos = -yPos;
        var coords = '0% '+ yPos + 'px';
        $slider.style.backgroundPosition = coords;
    }
    
    window.addEventListener('scroll', function(){
        parallax();	
    });
    
    
    
});


