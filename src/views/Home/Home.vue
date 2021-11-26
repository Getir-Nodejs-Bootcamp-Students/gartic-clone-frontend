<template>
    <div class="home-wrapper">
        <div class="main-card">
            <div class="card-row">
                <div class="quick-game">Hızlı Oyun</div>
                <div class="avatar"></div>
                <div class="nickname">
                    <span>Username</span>
                    <label class="text-input">
                        <input v-model="userName" type="text" />
                    </label>
                </div>
                <div class="play">
                    <button @click="playBtnClickHandler">Create Room</button>
                </div>
            </div>
            <div class="card-row or">
                <span class="or-text"></span>
            </div>
            <div class="card-row"></div>
        </div>
    </div>
</template>
<script>
import "./home.scss";
import generateRandomRoomId from "@/helpers/randomRoomId";
export default {
    name: "Home",
    data() {
        return {
            userName: "",
        };
    },
    components: {},
    methods: {
        playBtnClickHandler() {
            this.$store.commit("setUserName", this.userName);
            this.$router.push({ name: "game", params: { roomId: generateRandomRoomId(20) } });
        },
    },
};
</script>

<style></style>
