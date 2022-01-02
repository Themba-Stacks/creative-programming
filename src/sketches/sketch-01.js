const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;
    context.translate(width/5, height/5);
    context.strokeStyle = "white"

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const [ix, iy] = [0.17, 0.17];
    const offset = width * 0.02;
    let x, y;
            
    for(let i = 0; i < 5; ++i) {
        for(let j = 0; j < 5; ++j) {
          y = iy + (h + gap) * j;
          x = ix + (w + gap) * i;
          
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();
          
          if(Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset);
            context.stroke();
          }
      }
    }
  };

canvasSketch(sketch, settings);
