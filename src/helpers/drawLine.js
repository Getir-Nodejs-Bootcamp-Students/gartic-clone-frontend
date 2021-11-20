function drawLine(
  context,
  x0,
  y0,
  x1,
  y1,
  color,
  lineWidth,
  socket,
  isSocket = true
) {
  context.beginPath();
  context.moveTo(x0, y0);
  context.lineTo(x1, y1);
  context.lineCap = "round";
  context.strokeStyle = color;
  context.lineWidth = lineWidth;
  context.stroke();
  context.closePath();
  context.globalAlpha = 1;

  //   var w = canvas.width;
  //   var h = canvas.height;
  if (isSocket) {
    socket.emit("canvas:draw", {
      x0: x0,
      y0: y0,
      x1: x1,
      y1: y1,
      color: color,
      lineWidth : lineWidth,
      room: 1,
    });
  }
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
