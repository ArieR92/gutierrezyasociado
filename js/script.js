//secondary carousel//

$(".owl-carousel").owlCarousel({
    autoplay: false,
    autoplayhoverpause: true,
    autoplaytimeout: 100,
    items: 3,
    nav: true,
    loop: true,
    responsive: {
        0:{
            items:1,
            nav:false,
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

//FORM VALIDATION//

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
  })()





//show less/show more button funtion

$('.readmore-btn').on('click', function(){
  $(this).parent().toggleClass('ShowContent');

  var replaceText = $(this).parent().hasClass('ShowContent') ? "Leer menos" : "Leer más";
  $(this).text(replaceText);

});