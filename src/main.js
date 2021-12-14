import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import VueToast from "vue-toast-notification";
import { io } from "socket.io-client";
import store from "./store";
import config from "./config/index";

const socket = io(config.SERVER_URL, {
    transports: ["websocket", "polling", "flashsocket"],
    autoConnect: false,
});
createApp(App)
    .use(router)
    .use(store)
    .use(VueToast)
    .use(
        new VueSocketIO({
            debug: true,
            connection: socket,
            //options object is Optional
        })
    )
    .mount("#app");
