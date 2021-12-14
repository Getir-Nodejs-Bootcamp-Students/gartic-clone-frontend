<template>
    <div class="word-wrapper">
        <div class="main-card">
            <div class="topic">ADD YOUR OWN WORD!</div>
            <div class="input-area">
                <input v-model="text" type="text" />
                <span class="text-muted">Select a word at least 2-7 letter long.</span>
            </div>
            <button v-if="!loading" @click="submitHandler">Submit</button>
            <button v-else disabled><div class="loader"></div></button>
            <div class="msg">{{ msg }}</div>
        </div>
    </div>
</template>

<script>
import "./addWord.scss";
import axios from "axios";
import config from "../../../config/index";
export default {
    name: "AddWord",
    data() {
        return {
            text: "",
            msg: "",
            loading: false,
        };
    },
    methods: {
        submitHandler: function () {
            this.msg = "";
            this.loading = true;
            axios
                .post(`${config.SERVER_URL}words/add`, {
                    word: this.text,
                })
                .then((res) => {
                    console.log(res);
                    this.text = "";
                    this.loading = false;
                    this.msg = "Your word added successfully";
                });
        },
    },
};
</script>

<style></style>
