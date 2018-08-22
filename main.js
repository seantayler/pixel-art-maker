// grid1 = document.getElementById('grid1')
// grid2 = document.getElementById('grid2')
// grid3 = document.getElementById('grid3')
// grid4 = document.getElementById('grid4')
// grid5 = document.getElementById('grid5')
// grid6 = document.getElementById('grid6')
// grid7 = document.getElementById('grid7')
// grid8 = document.getElementById('grid8')
// grid9 = document.getElementById('grid9')
// grid10 = document.getElementById('grid10')
// grid11 = document.getElementById('grid11')
// grid12 = document.getElementById('grid12')
// grid13 = document.getElementById('grid13')
// grid14 = document.getElementById('grid14')
// grid15 = document.getElementById('grid15')
// grid16 = document.getElementById('grid16')

container = document.getElementById('container')
palette = document.getElementById('palette')
colors = document.getElementsByClassName('color')

red = document.getElementById('red')
blue = document.getElementById('blue')
green = document.getElementById('green')
black = document.getElementById('black')
orange = document.getElementById('orange')
purple = document.getElementById('purple')
yellow = document.getElementById('yellow')
white = document.getElementById('white')

palette.addEventListener('click', (e) => {
  color = e.target.id
  container.addEventListener('click', (e) => {
    e.target.style.backgroundColor = color;})
});

// container.addEventListener('click', (e) => {
//   console.log(e.target)
//   e.target.style.backgroundColor = 'red';})
// blue.addEventListener('click', (e) => e.target.style.backgroundColor = 'blue';)
