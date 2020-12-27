const BIRTHDAY = new Date(1999, 10, 14)
const MILLISECONDS_IN_ONE_YEAR = 3.154e+10

const PREMIUM_RESOURCE_HTML_SUFFIX = `<span class="badge bg-success ml-2" title="Premium" style="color: white; font-weight: normal;">$</span>`

$(document).ready(() => {
    // Age injection
    let injectableElement = $(".age-injector")
    if (injectableElement) {
        let difference = new Date().getTime() - BIRTHDAY.getTime()
        let age = Math.floor(difference / MILLISECONDS_IN_ONE_YEAR)

        let currentText = injectableElement.text()
        injectableElement.text(currentText.replace("{age}", age))
    }

    // Generate plugin cards
    createPluginCard("veinminer", "VeinMiner", 
        "Mine an entire vein of ores by breaking only one source block. Highly configurable including custom tools, block lists and block aliasing.",
        12038
    )
    createPluginCard("dragoneggdrop", "DragonEggDrop - Revival",
        "Custom YAML-based Ender Dragon templates, loot tables and infinite automatic Ender Dragon respawns (with countdowns!).",
        35570
    )
    createPluginCard("alchemicalarrows", "AlchemicalArrows", 
        "Special arrows with unique effects and abilities both in-world and against players and mobs. Perfect for diverse PvP environments and servers.",
        11693
    )
    createPluginCard("locksecurity", "LockSecurity 2", 
        "Lock chests, doors and other blocks using physical keys. Useful for players as container protection and admins for custom maps!",
        81282, true
    )
    createPluginCard("alchema", "Alchema",
        "Integrates the world of brewery, witchcraft and magic into Minecraft without being intrusive on the vanilla feel of the game.",
        87078
    )

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
})

function createPluginCard(pluginId, title, description, spigotResourceId, premium = false) {
    let pluginHTMLTemplate = $("#plugin-card-template").html()
        .replace("{{plugin_id}}", pluginId.toLowerCase())
        .replace("{{title}}", !premium ? title : `${title} ${PREMIUM_RESOURCE_HTML_SUFFIX}`)
        .replace("{{description}}", description)
        .replace("{{url_github}}", `https://github.com/2008Choco/${pluginId}`)
        .replace("{{url_javadocs}}", `./javadocs/${pluginId}/index.html`)
        .replace("{{url_spigotmc}}", `https://spigotmc.org/resources/${spigotResourceId}`)
        .replace("{{url_moreinfo}}", `./plugins/${pluginId}.html`)

    $("#plugin-card-container").append(pluginHTMLTemplate)
}
