<template>
    <div class="userCard-wrapper">
        <div class="avatar"></div>
        <div class="user">
            <div class="nickname">
                {{ userObj.userName }}
                <div v-if="this.keyId === this.turnId" class="drawer">
                    <img src="@/assets/pencil.png" alt="" />
                </div>
            </div>

            <div class="points">{{ userObj.points }}</div>
        </div>
    </div>
</template>

<script>
import "./userCard.scss";
import { getCurrentInstance } from "vue";
export default {
    props: ["userObj", "turnId"],
    data() {
        return {
            keyId: "",
        };
    },
    mounted() {
        this.keyId = getCurrentInstance().vnode.key;
    },
};
</script>

<style></style>
