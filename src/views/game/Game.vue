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
    </div>
</template>

<script>
import "./game.scss";
import initWhiteBoard from "@/helpers/initWhiteBoard";
import UserCard from "@/components/user-card/UserCard";
import AnswersChat from "@/components/answers-chat/AnswersChat";
export default {
    name: "Game",
    components: {
        UserCard,
        AnswersChat,
    },
    sockets: {},
    mounted() {
        initWhiteBoard();

        console.log(this.$store.state.user);
    },
};
</script>
