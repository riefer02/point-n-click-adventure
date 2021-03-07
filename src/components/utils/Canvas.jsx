import React, { useEffect } from "react";

export default function Canvas() {
  const canvasRef = React.createRef();

  const fitContainer = () => {
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    fitContainer(canvas);
    // context.fillStyle = "brown";
    // context.fillRect(10, 10, 150, 100);

    context.beginPath();
    context.moveTo(1275, 250);
    context.lineTo(1200, 75);
    context.lineTo(100, 25);
    context.fill();
    context.closePath();

    // context.moveTo(1700, 480);
    // context.lineTo(1700, 100);
  }, []);

  return <canvas id="canvas" ref={canvasRef} className="bg-red-200"></canvas>;
}
