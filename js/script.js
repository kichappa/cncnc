// $('.splash').hide(0);
$(document).ready(function () {
});
$(window).on('load', function(){
    $('#preloader-image').delay(500).slideUp(350);
    $('#preloader-text').delay(600).fadeOut(350);
    $('#preloader').delay(900).fadeOut();
    $('.splash-text-hi').hide(0).delay(1300).fadeIn(1750).delay(500).fadeOut(1750);
    $('.splash-text-name').hide(0).delay(1300).delay(4000).fadeIn(1750);
});