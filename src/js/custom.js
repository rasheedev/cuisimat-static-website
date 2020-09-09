/* --------------------------------------------------------------------
-----------------------------------------------------------------------
   Website Name : Cuisimat
   Author : eyaka
   Version : 1.0.0
   Created : September 2020
   File Description : Main JS file
-----------------------------------------------------------------------
---------------------------------------------------------------------*/

/* Preloader */ 
$(window).on('load', function() { 
    $('#preloader').delay(500).fadeOut('slow');
    $('.spinner').delay(250).fadeOut();
    $('body').delay(250).css({
            'overflow': 'visible'
    });
});


$(document).ready(function(){

    "use strict";


    // Home Carousel
    $("#owl-banners").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplayHoverPause: true,
        autoplay: 2000,
        mouseDrag: true,
        dots:false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });

    // Services Carousel
    $('#owl-brands').owlCarousel({ 
        items: 6,
        nav: true,
        loop: true,
        margin: 40,
        autoplayHoverPause: true,
        autoplay: 2500,
        mouseDrag: true,
        dots: false, 
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        responsive: {
            0: {
                items: 3,
                nav: true
            },
            600: {
                items: 4,
                nav: true
            },
            1000: {
                items: 6,
                nav: true
            }
        }
    });
    

});
