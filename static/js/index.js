import routes from "./routes.js";

const router = async () => {
    let match = routes.find( (route) => route.path === location.pathname)
    if (!match) {
        match = routes[0];
    }
    const view = new match.view();
    document.querySelector("#app").innerHTML = await view.getHtml()

    console.log(view.getHtml()) /////////////////////////////////

}

const navigateTo = (url) => {
    window.history.pushState({}, "", url);
    router();
}

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})