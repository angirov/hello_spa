import NotFound from "./views/NotFound.js";
import Welcome from "./views/Welcome.js";
import Home from "./views/Home.js";
import Friends from "./views/Friends.js";
import History from "./views/History.js";
import Play from "./views/Play.js";

const routes = [
    { path: "/404", view: NotFound },
    { path: "/", view: Welcome },
    { path: "/home", view: Home },
    { path: "/friends", view: Friends },
    { path: "/history", view: History },
    { path: "/play", view: Play },
];

export default routes;