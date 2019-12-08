
$(document).ready(function(){
    $('.slick-slider').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        dots: true,
    });

    $('.parallax-slider').slick({
        ltr: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        fade: true,
        cssEase: 'linear',
    });
    $('.number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });

});
wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
})
wow.init();

