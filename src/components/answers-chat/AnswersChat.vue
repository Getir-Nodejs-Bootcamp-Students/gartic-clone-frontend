<template>
    <div class="answers-chat-wrapper">
        <div class="chat-messages">
            <div class="message" v-for="messageObj in messageArr" :key="messageObj">
                <div v-if="messageObj.isCorrect === true" class="correct-answer">{{ messageObj.userName }} 's guess is correct!</div>
                <div v-if="messageObj.message" class="nickname">{{ messageObj.userName }}:</div>
                <div v-if="messageObj.message" class="text">{{ messageObj.message }}</div>
            </div>
        </div>
        <div class="send-message">
            <input v-model="this.message" type="text" @keyup.enter="onMessageSubmit" />
        </div>
    </div>
</template>

<script>
import "./answersChat.scss";
export default {
    data() {
        return {
            message: "",
            messageArr: [],
        };
    },
    sockets: {
        "message:correctGuess": function (userName) {
            console.log(userName);
            this.messageArr.push({
                userName,
                isCorrect: true,
            });
        },
        "message:incorrectGuess": function (messageObj) {
            this.messageArr.push({
                userName: messageObj.userName,
                message: messageObj.message,
                isCorrect: false,
            });
        },
    },
    methods: {
        onMessageSubmit: function () {
            if (this.message.length > 0) {
                this.$socket.emit("message:guess", {
                    roomId: this.$route.params.roomId,
                    message: this.message,
                    userName: this.$store.state.user.name,
                });
                this.messageArr.push({
                    message: this.message,
                    userName: this.$store.state.user.name,
                });
                this.message = "";
                setTimeout(() => {
                    let chat = this.$el.querySelector(".chat-messages");
                    chat.scrollTop = 999999999;
                }, 0);
            }
        },
    },
    mounted() {
        console.log(this.$socket);
    },
};
</script>

<style></style>
