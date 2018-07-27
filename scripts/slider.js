$(document).ready(function() {
    $(".slider").hover(
        function() { // Do not understand why these aren't working... :(
            console.log("entering slider");
            setShownFlag($(this).parent, true);
        },
        function() {
            console.log("exiting slider");
            setShownFlag($(this).parent, false);
        }
    );
    
    $(".plugin-background").hover(
        function() {
            setShownFlag($(this).children(".slider-bar"), true);
        },
        function() {
            setShownFlag($(this).children(".slider-bar"), false);
        }
    );
});

function setShownFlag(sliderbar, shown) {
    var sliders = sliderbar.children();
    var isShown = sliders.hasClass("shown");
    
    if (shown && !isShown) {
        sliders.addClass("shown");
    } else if (!shown && isShown) {
        sliders.removeClass("shown");
    }
}