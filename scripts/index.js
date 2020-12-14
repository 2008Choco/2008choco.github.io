const BIRTHDAY = new Date(1999, 10, 14)
const MILLISECONDS_IN_ONE_YEAR = 3.154e+10

$(document).ready(() => {
    // Hover -> gif for plugin cards
    $(".card").hover(
        event => { // Enter
            let topImage = $(event.currentTarget).find(".card-img-top")
            let coverPath = topImage.attr("src")
            let gifPath = `${coverPath.substring(0, coverPath.indexOf("_"))}.gif`
            topImage.attr("src", gifPath)
        },
        event => { // Exit
            let topImage = $(event.currentTarget).find(".card-img-top")
            let gifPath = topImage.attr("src")
            let coverPath = `${gifPath.substring(0, gifPath.indexOf(".gif"))}_cover.png`

            topImage.attr("src", coverPath)
        }
    )

    // Age injection
    let injectableElement = $(".age-injector")
    if (injectableElement) {
        let difference = new Date().getTime() - BIRTHDAY.getTime()
        let age = Math.floor(difference / MILLISECONDS_IN_ONE_YEAR)

        let currentText = injectableElement.text()
        injectableElement.text(currentText.replace("{age}", age))
    }
})
