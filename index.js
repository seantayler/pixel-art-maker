'use strict';

let brush;

const drawCanvas = function() {
  const canvas = document.querySelector('#canvas');
  let pixel;

  for (let i = 0; i < 2013; i++) {
    pixel = document.createElement('div');
    pixel.className = 'pixel';
    canvas.appendChild(pixel);
  }

  canvas.addEventListener('click', (event) => {
    if (event.target.className !== 'pixel') {
      return;
    }

    event.target.style.background = brush;
    event.target.style.borderColor = brush;
  });
}

const drawPalette = function() {
  const palette = document.querySelector('#palette');

  const hexColors = [
    '#b23232',
    '#ff4848',
    '#ff6c6c',
    '#e59b40',
    '#ffad48',
    '#ffc57e',
    '#e5de40',
    '#fff748',
    '#fffa91',
    '#39cc4b',
    '#48ff5e',
    '#91ff9e',
    '#3248b2',
    '#4867ff',
    '#91a3ff',
    '#6432b2',
    '#8f48ff',
    '#bb91ff',
    '#7c2b99',
    '#cf48ff',
    '#e291ff',
    '#000000',
    '#323232',
    '#666666',
    '#999999',
    '#cccccc',
    '#ffffff',
    '#3a2119',
    '#512e23',
    '#754233',
    '#90675b',
    '#ac8d84'
  ];

  let color;

  for (const hexColor of hexColors) {
    color = document.createElement('div');
    color.className = 'color';
    color.style.background = hexColor;
    palette.appendChild(color);
  }

  const heading = document.createElement('h2');
  heading.textContent = 'BRUSH COLOR >';

  const brushColor = document.createElement('div');
  brushColor.className = 'brushColor';

  palette.appendChild(heading);
  palette.appendChild(brushColor);

  palette.addEventListener('click', (event) => {
    if (event.target.className !== 'color') {
      return;
    }

    brush = event.target.style.background;
    brushColor.style.background = brush;
  });
}

drawCanvas();
drawPalette();