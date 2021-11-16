function drawLine(context, x0, y0, x1, y1) {
    context.beginPath();
    context.moveTo(x0, y0);
    context.lineTo(x1, y1);
    context.lineCap = "round";
    context.strokeStyle = "rgb(15, 65, 255)";
    context.lineWidth = 6;
    context.stroke();
    context.closePath();
    // setInterval(() => {
    //     context.beginPath();
    //     context.moveTo(x0, y0);
    //     context.lineTo(x1, y1);
    //     context.lineCap = "round";
    //     context.strokeStyle = "rgb(10, 94, 251,0.3)";
    //     context.lineWidth = 6;
    //     context.stroke();
    //     context.closePath();
    // }, 500);
}

export default drawLine;
