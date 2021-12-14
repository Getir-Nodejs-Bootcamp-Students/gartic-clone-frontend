import drawLine from "./drawLine";


export function userCanDraw(socket, roomId) {
    let lastX, lastY, isFirst, isDrawing;
    let canvas = document.getElementById("whiteboard-canvas");
    let ctx = canvas.getContext("2d");
    canvas.addEventListener("mousemove", (e) => {
        if (isDrawing) {
            if (isFirst) {
                lastX = e.offsetX;
                lastY = e.offsetY;
                isFirst = false;
            }
            drawLine(ctx, e.offsetX, e.offsetY, lastX, lastY, "rgb(0,0,0)", 3, socket, true, roomId);
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

export function userCantDraw() {
    let canvas = document.getElementById("whiteboard-canvas");
    let canvasClone = canvas.cloneNode(true);
    canvas.parentNode.replaceChild(canvasClone, canvas);
}

export default { userCanDraw, userCantDraw };
