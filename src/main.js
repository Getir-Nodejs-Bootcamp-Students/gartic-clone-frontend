import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import { io } from "socket.io-client";
import store from "./store";

const socket = io("https://784b-176-218-239-172.ngrok.io/", {
    transports: ["websocket", "polling", "flashsocket"],
    autoConnect: false,
});
createApp(App)
    .use(router)
    .use(store)
    .use(
        new VueSocketIO({
            debug: true,
            connection: socket,
            //options object is Optional
        })
    )
    .mount("#app");
