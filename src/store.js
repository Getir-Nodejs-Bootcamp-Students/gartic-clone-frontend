import { createStore } from "vuex";

const store = createStore({
    state() {
        return {
            user: {
                name: "",
                roomId: "",
            },
        };
    },
    mutations: {
        setUserName(state, username) {
            console.log(state);
            console.log(username);
            state.user.name = username;
        },
    },
});

export default store;
