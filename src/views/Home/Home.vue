<template>
    <div class="main-wrapper">
        <div id="background-image"></div>
        <canvas id="background-canvas" width="1920" height="800"></canvas>
        <div class="main-card">
            <div class="card-row">
                <div class="quick-game">Hızlı Oyun</div>
                <div class="avatar"></div>
                <div class="nickname">
                    <span>Kullanıcı Adın</span>
                    <label class="text-input">
                        <input type="text" />
                    </label>
                </div>
                <div class="play">
                    <button>Oyna</button>
                </div>
            </div>
            <div class="card-row or">
                <span class="or-text">Veya</span>
            </div>
            <div class="card-row"></div>
        </div>
    </div>
</template>
<script>
import "./home.scss";
import drawLine from "../../helpers/drawLine";
import fadeOutLine from "../../helpers/fadeOutLine";
import initBackgroundCanvas from "@/helpers/initBackgroundCanvas";
export default {
    name: "Home",
    data() {
        return {
            lastX: null,
            lastY: null,
            isFirst: true,
        };
    },
    components: {},
    created() {
        window.addEventListener("resize", () => {
            let canvas = document.getElementById("background-canvas");
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    },
    mounted() {
        initBackgroundCanvas(this.lastX, this.lastY, this.isFirst);
    },
};
</script>

<style></style>
