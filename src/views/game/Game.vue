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
      drawLine(
        context,
        object.x0,
        object.y0,
        object.x1,
        object.y1,
        object.color,
        object.lineWidth,
        null,
        false
      );
    },
  },
  mounted() {
    this.$socket.connect();
    initWhiteBoard(this.$socket);

    console.log(this.$store.state.user);
  },
};
</script>
