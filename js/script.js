//secondary carousel//

$(".owl-carousel").owlCarousel({
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    responsive: {
        0:{
            items:1,
            nav:true,
            dots: false
        },
        600:{
            items:2,
            nav:false,
            dots: true
        },
        1000:{
            items:3,
            nav:true,
            loop:true
            
        }
    }

});

