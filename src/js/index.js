import { Router } from "./router.js"
import { Change } from "./change.js"

const router = new Router()
const nav = document.querySelectorAll('a')

nav[0].onclick = () => {
    router.route(event)
    Change.One()
}

nav[1].onclick = () => {
    router.route(event)
    Change.Two()
}

nav[2].onclick = () => {
   router.route(event)
    Change.Three()
}

router.add("/", "/src/pages/home.html")
router.add("/about", "/src/pages/about.html")
router.add("/exploration", "/src/pages/exploration.html")
router.add(404, "/src/pages/404.html")

router.handle()

window.onpopstate = () => router.handle()