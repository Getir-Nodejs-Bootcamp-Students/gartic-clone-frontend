<template>
    <div class="game-wrapper">
        <div class="grid-item players">
            <UserCard v-for="user in roomObj.users" :key="Object.keys(user)[0]" :userObj="user[Object.keys(user)[0]]" :turnId="roomObj.currentTurn" />
        </div>
        <div class="grid-item white-board">
            <div class="timer">
                {{ this.timer }}
            </div>
            <div class="owner-ui" v-if="this.isOwner === true && this.gameState === false">
                <button @click="startGameHandler" class="start-btn">Start Game</button>
                <button @click="linkHandler" class="invite-lnk">Invite Link</button>
            </div>
            <div class="player-ui" v-if="this.isOwner === false && this.gameState === false">
                <span>Waiting room owner to start the game</span>
                <span class="waiting"></span>
            </div>

            <div class="word-ui" v-if="this.isTurn === true">
                <button class="word" :value="this.wordArr[0]" @click="onWordPicked">{{ this.wordArr[0] }}</button>
                <button class="word" :value="this.wordArr[1]" @click="onWordPicked">{{ this.wordArr[1] }}</button>
                <button class="word" :value="this.wordArr[2]" @click="onWordPicked">{{ this.wordArr[2] }}</button>
            </div>
            <canvas id="whiteboard-canvas"></canvas>
        </div>
        <div class="grid-item answers-chat">
            <AnswersChat :gameState="gameState" />
        </div>
        <div class="grid-item regular-chat">D</div>
    </div>
</template>

<script>
import "./game.scss";
import initWhiteboard from "@/helpers/initWhiteboard";
import UserCard from "@/components/user-card/UserCard";
import AnswersChat from "@/components/answers-chat/AnswersChat";
import drawLine from "@/helpers/drawLine";
import clearWhiteboard from "@/helpers/clearWhiteboard";
import { userCanDraw, userCantDraw } from "@/helpers/eventListeners";
import config from "@/config/index.js";
export default {
    name: "Game",
    data() {
        return {
            gameState: false,
            isOwner: false,
            isTurn: false,
            wordArr: [],
            roomObj: {},
            timer: 0,
        };
    },
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
        "room:get": function (roomObj) {
            console.log(roomObj);
            if (roomObj.owner == this.$socket.id) {
                this.isOwner = true;
            }
            if (roomObj.gameState) {
                this.gameState = true;
            }
            this.roomObj = roomObj;
        },
        "game:started": function (state) {
            this.gameState = state.gameState;
            if (state.currentTurn == this.$socket.id) {
                // let user to pick a word
                this.isTurn = true;
            }
        },
        "game:wordPick": function (wordArr) {
            this.wordArr = wordArr;
            this.isTurn = true;
        },
        "time:remaining": function (time) {
            this.timer = time;
        },
        "canvas:clear": function () {
            clearWhiteboard();
        },
    },
    methods: {
        startGameHandler: function () {
            this.$socket.emit("game:start", { roomId: this.$route.params.roomId });
        },
        linkHandler: function () {
            navigator.clipboard.writeText(config.SERVER_URL + "/join/" + this.$route.params.roomId);
        },
        onWordPicked: function (event) {
            this.$socket.emit("game:wordPicked", event.target.value);
            userCanDraw(this.$socket, this.$route.params.roomId);
            this.isTurn = false;
        },
    },
    beforeMount() {
        this.$socket.connect();
        //console.log(this.$socket);
    },
    mounted() {
        console.log(userCantDraw)
        console.log(this.$socket);
        this.$socket.emit("room:join", { userName: this.$store.state.user.name, roomId: this.$route.params.roomId });
        initWhiteboard(this.$socket, this.$route.params.roomId);

        //console.log(this.$store.state.user);
    },
};
</script>
