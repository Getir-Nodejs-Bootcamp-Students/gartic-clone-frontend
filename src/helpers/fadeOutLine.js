function fadeOut(ctx, canvas) {
    ctx.fillStyle = "rgba(10, 94, 251,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setTimeout(() => fadeOut(ctx, canvas), 50);
}

export default fadeOut;
