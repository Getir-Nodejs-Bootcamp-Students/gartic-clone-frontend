import drawLine from "./drawLine";
import fadeOutLine from "./fadeOutLine";
function initCanvas(lastX, lastY, isFirst) {
    let canvas = document.getElementById("background-canvas");
    let ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.addEventListener("mousemove", (e) => {
        if (isFirst) {
            lastX = e.clientX;
            lastY = e.clientY;
            isFirst = false;
        }
        drawLine(ctx, e.clientX, e.clientY, lastX, lastY);
        lastX = e.clientX;
        lastY = e.clientY;
    });
    fadeOutLine(ctx, canvas);
}
export default initCanvas;
