function fadeOut(ctx, canvas) {
    ctx.fillStyle = "rgba(10, 94, 251,0.1)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    

    setTimeout(() => fadeOut(ctx, canvas), 2000);
}

export default fadeOut;
