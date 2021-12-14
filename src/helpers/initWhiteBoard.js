import drawLine from "./drawLine";

function initWhiteBoard() {
    let canvas = document.getElementById("whiteboard-canvas");
    if (window.innerWidth > 1200) {
        canvas.width = 909.31;
        canvas.height = 600;
    } else {
        canvas.width = 663.3;
        canvas.height = 600;
    }
}

export default initWhiteBoard;
