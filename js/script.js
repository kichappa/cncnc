// $('.splash').hide(0);

var theme = '/css/light.css'
// $('#theme-css').attr('href', '/css/' + theme + '.css');
$('#theme-toggle-icon').click(function () {
    $('body').fadeOut(100, function () {
        $("#theme").attr("href", theme);
        // window.alert($("#theme").attr("href"));
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

// window.alert("now");

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

var set = 0;
var index = 0;
var time = 0;
var backindex = -1;
var iSpeed=150;


function typewriter() {
    var text = ["Hi.", "Welcome to cncnc!"]
    var caret = "<span></span>";
    var destination = document.getElementById("splash-text");
    if (!set && index == text[0].length) {
        if (iSpeed == 150) {
            // window.alert("Setting iSpeed=1000")
            iSpeed = 1000;
        } else {            
            // window.alert("Setting iSpeed=100")
            iSpeed = 100;
            if (index > backindex) {
                // window.alert("innerHTML="+destination.innerHTML+"\n"+"index=" + index+", backindex="+backindex);
                // window.alert("innerHTML=" + destination.innerHTML + "\n" + "index=" + index + ", backindex=" + backindex + "\nnext char to delete=" + destination.innerHTML.slice(destination.innerHTML.length - 1 - caret.length, -(caret.length)));
                if (destination.innerHTML.slice(destination.innerHTML.length - 1 - caret.length, -(caret.length)) != ";") {
                    destination.innerHTML = destination.innerHTML.slice(0, -(caret.length + 1));
                    destination.innerHTML += caret;
                    backindex++;
                } else if (destination.innerHTML.slice(destination.innerHTML.length - 6 - caret.length, -(caret.length)) == "&nbsp;") {
                    destination.innerHTML = destination.innerHTML.slice(0, -(caret.length + 6));
                    destination.innerHTML += caret;
                    backindex++;
                }
            } else {
                iSpeed=500;
                index = 0;
                set = 1;
            }
        }
    } else if (!set && index == text[0].length) {
        iSpeed = 150;
        destination.innerHTML = destination.innerHTML.slice(0, -caret.length);
    } else if (index < text[set].length) {
        iSpeed = 150;
        // window.alert("innerHTML="+destination.innerHTML+"\nset="+set+", index=" + index+"\nnext letter to be added="+text[set][index]);
        if (set && !index) {
            // window.alert("innerHTML="+destination.innerHTML);
            destination.innerHTML = destination.innerHTML.slice(0, -caret.length);
        }
        if (index == 0) {
            destination.innerHTML += caret;
        }
        if (index >= 0)
            destination.innerHTML = destination.innerHTML.slice(0, -caret.length);
        if (text[set][index] == " ") {
            index++;
            destination.innerHTML += "&nbsp;" + caret;
        }
        else
            destination.innerHTML += text[set][index++] + caret;
    }
    // if (index == text.length) {
    //     destination.innerHTML = destination.innerHTML.slice(0);
    //     index++;
    // }
    setTimeout("typewriter()", iSpeed);
}

$(window).on('load', function () {
    $('#preloader-image').delay(400).fadeOut(350);
    $('#preloader-text').delay(550).fadeOut(350);
    $('#preloader-container').delay(900).fadeOut(350);
    // $('#preloader-container').hide(0);
    // $('#splash-text-hi').hide(0).delay(1300).fadeIn(1750).delay(500).fadeOut(1750);
    // $('#splash-text-name').hide(0).delay(1300).delay(4000).fadeIn(1750);
    // $('#splash-text').hide(0).delay(1000).fadeIn(1750).delay(500).fadeOut(1750, function () {
    //     // $('#splash-text').hide(0).text("My name is Tandu👻!").fadeIn(1750);
    //     $('#splash-text').hide(0).text("Welcome to cncnc!").fadeIn(1750);
    // });
    // document.getElementById('splash-text').innerHTML+=" worked!"
    // typewriter(document.getElementById("splash-text"), "Your typewriter worked!");
    // window.alert(document.getElementById("splash-text").innerHTML)
    var delayBeforeTyping = setInterval(function () {
        if (time == 10) {
            typewriter();
            clearInterval(delayBeforeTyping);
        } else
            time++;
    }, 100);

});