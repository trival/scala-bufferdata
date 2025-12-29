import { render, width, height } from "./scene";

// Setup canvas
const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d")!;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width * 2}px`;
canvas.style.height = `${height * 2}px`;

// Render button handler
const renderBtn = document.getElementById("render-btn") as HTMLButtonElement;
renderBtn.addEventListener("click", () => {
  renderBtn.disabled = true;
  renderBtn.textContent = "Rendering...";

  // Use setTimeout to allow UI to update before blocking render
  setTimeout(() => {
    console.log("Starting render...");
    const startTime = performance.now();

    // Call render function - returns Float64Array with RGBA values in 0.0-1.0 range
    const f64Buffer = render();

    // Convert Float64Array (0.0-1.0) to Uint8ClampedArray (0-255) for canvas
    const u8Buffer = new Uint8ClampedArray(f64Buffer.length);
    for (let i = 0; i < f64Buffer.length; i++) {
      u8Buffer[i] = Math.floor(f64Buffer[i] * 255);
    }

    // Create ImageData and draw to canvas
    const imageData = new ImageData(u8Buffer, width, height);
    ctx.putImageData(imageData, 0, 0);

    const elapsed = ((performance.now() - startTime) / 1000).toFixed(2);
    console.log(`Render complete in ${elapsed}s`);

    renderBtn.disabled = false;
    renderBtn.textContent = "Render Scene";
  }, 10);
});
