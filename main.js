const sections = document.querySelectorAll("section[id]")
const navLinks = document.querySelectorAll(".nav-links li a")

window.addEventListener("scroll", () => {
    let current = ""

    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute("id")
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active")

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active")
        }
    });
})

const filterButtons = document.querySelectorAll(".filter-btn")
const showcaseCards = document.querySelectorAll(".showcase-card")

if (filterButtons.length && showcaseCards.length) {
    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            const filter = button.dataset.filter || "all"

            filterButtons.forEach(btn => btn.classList.remove("active"))
            button.classList.add("active")

            showcaseCards.forEach(card => {
                const categories = (card.dataset.category || "").split(/\s+/)
                const show = filter === "all" || categories.includes(filter)
                card.classList.toggle("is-hidden", !show)
            })
        })
    })
}