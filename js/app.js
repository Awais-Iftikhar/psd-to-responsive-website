$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        dots:true,
        autoplay: true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4,
                
            }
        }
    })
    $('.togglebtn').click(function(){
        $('.menu').fadeToggle()
    })
  });