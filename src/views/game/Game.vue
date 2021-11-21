<template>
    <div class="game-wrapper">
        <div class="grid-item players">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
        </div>
        <div class="grid-item white-board">
            <canvas id="whiteboard-canvas"></canvas>
        </div>
        <div class="grid-item answers-chat">
            <AnswersChat />
        </div>
        <div class="grid-item regular-chat">D</div>
        <button @click="this.$socket.disconnect()">asdasd</button>
    </div>
</template>

<script>
import "./game.scss";
import initWhiteBoard from "@/helpers/initWhiteBoard";
import UserCard from "@/components/user-card/UserCard";
import AnswersChat from "@/components/answers-chat/AnswersChat";
import drawLine from "@/helpers/drawLine";
export default {
    name: "Game",
    components: {
        UserCard,
        AnswersChat,
    },
    sockets: {
        "canvas:drawing": function (object) {
            let canvas = document.getElementById("whiteboard-canvas");
            let context = canvas.getContext("2d");
            drawLine(context, object.x0, object.y0, object.x1, object.y1, object.color, object.lineWidth, null, false);
        },
        "drawtime:send": function (time) {
            console.log(time);
        },
    },
    beforeMount() {
        this.$socket.connect();
    },
    mounted() {
        console.log(this.$socket);
        this.$socket.emit("room:join", { userName: this.$store.state.user.name, roomId: this.$route.params.roomId });
        initWhiteBoard(this.$socket,this.$route.params.roomId);

        console.log(this.$store.state.user);
    },
    unmounted() {
        this.$socket.emit("room:leave", this.$route.params.roomId);
    },
    updated() {
        this.$socket.emit("room:leave", this.$route.params.roomId);
    },
    beforeUnmount() {
        this.$socket.emit("room:leave", this.$route.params.roomId);
    },
};
</script>
