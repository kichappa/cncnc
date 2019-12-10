// $('.splash').hide(0);

var count = 0;
// var dots = [$("#loading-dots-1"), document.getElementById("loading-dots-2"), document.getElementById("loading-dots-3")];
// dot1=$('#loading-dots-1')
window.setInterval(function () {
    switch (count) {
        case 0:
            // window.alert("inside case 0");
            $("#loading-dots-1").css('opacity', '100%');
            count += 1;
            break;
        case 1:
            // window.alert("inside case 1");
            $("#loading-dots-2").css('opacity', '100%');
            count += 1;
            break;
        case 2:
            // window.alert("inside case 2");
            $("#loading-dots-3").css('opacity', '100%');
            count += 1;
            break;
        case 3:
            // window.alert("inside case default");
            for (count--; count > -1; count -= 1) {
                $("#loading-dots-1").css('opacity', '0%');
                $("#loading-dots-2").css('opacity', '0%');
                $("#loading-dots-3").css('opacity', '0%');
            }
            count = 0;
            break;
    }
}, 350);

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
    $('#preloader').delay(900).fadeOut(350);
    // $('#preloader').hide(0);
    // $('#splash-text-hi').hide(0).delay(1300).fadeIn(1750).delay(500).fadeOut(1750);
    // $('#splash-text-name').hide(0).delay(1300).delay(4000).fadeIn(1750);
    $('#splash-text').hide(0).text("Hi.").delay(1000).fadeIn(1750).delay(500).fadeOut(1750, function () {
        $('#splash-text').hide(0).text("My name is Tandu👻!").fadeIn(1750);
    });
});