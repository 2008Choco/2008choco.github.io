$(document).ready(function() {
    $(".plugin-background").hover(
        function() {
            setShownFlag($(this).children(".slider-container"), true);
            setShownFlag($(this).children(".slider-container").children(".slider-bar"), true);
        },
        function() {
            setShownFlag($(this).children(".slider-container"), false);
            setShownFlag($(this).children(".slider-container").children(".slider-bar"), false);
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