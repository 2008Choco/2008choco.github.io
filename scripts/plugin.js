$(document).ready(() => {
    // Home button change colour
    $("#home").hover(
        () => $("#home").attr("src", "../assets/icons/home_filled.svg"), // Enter
        () => $("#home").attr("src", "../assets/icons/home.svg") // Exit
    )
})
