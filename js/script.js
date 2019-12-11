// $('.splash').hide(0);

var theme = '/css/light.css'
// $('#theme-css').attr('href', '/css/' + theme + '.css');
$('#theme-toggle-icon').click(function () {
    $('body').fadeOut(100, function () {
        $("#stylesheet").attr("href", theme);
        // window.alert($("#stylesheet").attr("href"));
        (theme == '/css/dark.css') ? (theme = '/css/light.css') : (theme = '/css/dark.css');
    }).fadeIn(100);
});
var count = 0;
window.setInterval(function () {
    var dots = [$('#loading-dots-1'), $('#loading-dots-2'), $('#loading-dots-3')];
    if (count == 3) {
        for (count--; count >= 0; count--) {
            $(dots[count]).addClass('loading-dots-hidden', 300).removeClass('loading-dots', 300);
        }
    } else {
        $(dots[count]).addClass('loading-dots', 350).removeClass('loading-dots-hidden', 350);
        count++;
    }
}, 300);

$("#preloader-image").on('error', function () {
    $("#preloader-image").hide(0);
    $("#preloader-text").attr('id', 'preloader-text-nl')
    $("#pl-not-loading").html('<span style="font-style: italic"><br>(Ironically, the loading image is not loading</span>😛<span style="font-style: italic">.)</span>');
    // $('#loading-dots').Loadingdotdotdot({
    //     "speed":400,
    //     "maxDots": 3,
    //     "word": "Loading" 
    // });
    // $('#preloader-text-nl').css('transform', 'translateX(-13%)');
});
$(window).on('load', function () {
    $('#preloader-image').delay(400).fadeOut(350);
    $('#preloader-text').delay(550).fadeOut(350);
    $('#preloader-container').delay(900).fadeOut(350);
    // $('#preloader-container').hide(0);
    // $('#splash-text-hi').hide(0).delay(1300).fadeIn(1750).delay(500).fadeOut(1750);
    // $('#splash-text-name').hide(0).delay(1300).delay(4000).fadeIn(1750);
    $('#splash-text').hide(0).delay(1000).fadeIn(1750).delay(500).fadeOut(1750, function () {
        // $('#splash-text').hide(0).text("My name is Tandu👻!").fadeIn(1750);
        $('#splash-text').hide(0).text("Welcome to cncnc!").fadeIn(1750);
    });

});