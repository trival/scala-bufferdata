import { renderRaytracer } from "../../dist/main.js";

const width = 400;
const height = 300;

const canvas = document.querySelector<HTMLCanvasElement>("#canvas")!;
const ctx = canvas.getContext("2d")!;
canvas.width = width;
canvas.height = height;
canvas.style.width = `${width * 2}px`;
canvas.style.height = `${height * 2}px`;

const renderBtn = document.querySelector<HTMLButtonElement>("#render-btn")!;

renderBtn.addEventListener("click", () => {
  renderBtn.disabled = true;
  renderBtn.textContent = "Rendering...";

  // Yield to the browser before blocking render.
  setTimeout(() => {
    const start = performance.now();

    const buffer = renderRaytracer(width, height);
    const pixels = new Uint8ClampedArray(buffer);

    if (pixels.length !== width * height * 4) {
      console.warn(
        `Unexpected buffer size: got ${pixels.length}, expected ${width * height * 4}`,
      );
    }

    console.log(pixels);

    const imageData = new ImageData(pixels, width, height);
    ctx.putImageData(imageData, 0, 0);

    const elapsed = ((performance.now() - start) / 1000).toFixed(2);
    renderBtn.textContent = `Render (${elapsed}s)`;
    renderBtn.disabled = false;
  }, 10);
});
