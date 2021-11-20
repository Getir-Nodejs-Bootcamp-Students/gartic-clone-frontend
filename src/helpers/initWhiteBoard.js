import drawLine from "./drawLine";

function initWhiteBoard() {
    let lastX, lastY, isFirst, isDrawing;
    let canvas = document.getElementById("whiteboard-canvas");
    let ctx = canvas.getContext("2d");
    console.log(window.innerHeight);
    if (window.innerWidth > 1200) {
        canvas.width = 909.31;
        canvas.height = 600;
    }else{
        canvas.width = 663.3;
        canvas.height = 600;
    }
    canvas.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            if (isFirst) {
                lastX = e.offsetX;
                lastY = e.offsetY;
                isFirst = false;
            }
            drawLine(ctx, e.offsetX, e.offsetY, lastX, lastY, "rgb(0,0,0)", 3);
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
    });
    canvas.addEventListener("mousedown", (e) => {
        isDrawing = true;
    });
    canvas.addEventListener("mouseup", (e) => {
        isDrawing = false;
        lastX = NaN;
        lastY = NaN;
    });
}

export default initWhiteBoard;
