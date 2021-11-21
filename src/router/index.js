import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import Game from "../views/game/Game.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/game/:roomId",
        name: "game",
        component: Game,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
