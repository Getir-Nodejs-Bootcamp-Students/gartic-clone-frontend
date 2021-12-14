import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/home/Home.vue";
import Game from "../views/game/Game.vue";
import AddWord from "../views/word/addWord/AddWord.vue";
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
    {
        path: "/join/:roomId",
    },
    {
        path: "/addWord/",
        name: "AddWord",
        component: AddWord,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
