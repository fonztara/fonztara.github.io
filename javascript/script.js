const links = document.querySelector(".header-right ol")

function showMenu() {
    if (links.classList.contains("hidden")) {
        links.classList.remove("hidden")
    } else {
        closeMenu()
    }
}

function closeMenu() {
    links.classList.add("hidden")
}