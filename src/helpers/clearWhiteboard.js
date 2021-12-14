function clearWhiteboard() {
    let canvas = document.getElementById("whiteboard-canvas");
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export default clearWhiteboard;
