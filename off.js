let lastRenderTime = 0;
const Snakespeed = 2;

function main(currentTime) {
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000;
     if (secondsSinceLastRender < 1 / Snakespeed) return;
    window.requestAnimationFrame(main);
    console.log('Render');
    lastRenderTime = currentTime;
}

window.requestAnimationFrame(main);