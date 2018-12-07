const animate = ({ duration, timing, draw }) => {
  const start = window.performance.now();

  function tick(time) {
    // calcuate the fraction from 0 -> 1
    let fraction = (time - start) / duration;

    if (fraction > 1) {
      fraction = 1;
    }

    // get the progress
    const progress = timing(fraction);

    // draw the item with current progress
    draw(progress);

    if (fraction < 1) {
      // if not completed -> tick next
      requestAnimationFrame(tick);
    }
  }

  requestAnimationFrame(tick);
};

export { animate };
