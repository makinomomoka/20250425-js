$(function(){
    $(".slider").slick({
        autoplay: true,
        Infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>',
        dots: true,
    });
});