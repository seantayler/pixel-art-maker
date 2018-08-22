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
