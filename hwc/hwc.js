var hwcCanvas = document.getElementById("hwcCanvas");
var hwcCanvasContext = hwcCanvas.getContext("2d");

hwcCanvasContext.moveTo(0, 0);
hwcCanvasContext.lineTo(200, 100);
hwcCanvasContext.stroke();