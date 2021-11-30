$(document).ready(function() {
    $("#slider").bxSlider({
        auto: true,
       // minSlides: 2,
        //maxSlides: 2,
        slideWidth: 500,
        slideMargin: 20,
        randomStart: true,
        captions:true,
        pause: 3000,
        pagerType:'short',
        pagerSelector:'#id_pager',

    });
});