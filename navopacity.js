/*Special thanks to Markus Kottländer (on StackOverflow) for helping me out with this script!*/
$(function () {
    var headertop = $("#aboutheader").offset().top-400;
    var hoveractive = false;
    var fadeout = true;
    var fadein = true;
    
    $(window).scroll(function () {
        if($("#navigationbar").css("display") !== "none"){
        if ($(window).scrollTop() > headertop && fadeout) {
            hoveractive = true;
            fadeout = false;
            fadein = true;
            $("#navigationbar").fadeTo(1000, .3);
        }
        if ($(window).scrollTop() <= headertop && fadein) {
            hoveractive = false;
            fadein = false;
            fadeout = true;
            $("#navigationbar").fadeTo(1000, 1);
        }
        }
    });

    $("#navigationbar").hover(function () {
        if (hoveractive) {
            $("#navigationbar").fadeTo(250, 1);
        }
    }, function () {
        if (hoveractive) {
            $("#navigationbar").fadeTo(250, .3);
        }
    });
});