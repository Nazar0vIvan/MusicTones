images = [
  'sld-buddy-guy.jpg',
  'sld-elton.jpg',
  'sld-hendrix.jpg',
  'sld-mozart.jpg',
  'sld-shaw.jpg',
  'sld-tommy1.jpg',
  'sld-waits.jpg',
  'sld-adams.jpg'
]

function set_random_image() {
  console.log(1)
  random_index = Math.floor(Math.random() * images.length);
  selected_image = images[random_index]

  console.log(selected_image)

  document.getElementById('slider').style.backgroundImage = `url('/static/images/${selected_image}')`
}