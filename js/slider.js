
function set_random_images() {

  const pb = [
    { path: "sld-buddy-guy.jpg", background: '#d3c7ba' },
    { path: "sld-elton.jpg",     background: '#efe3d7' },
    { path: "sld-hendrix.jpg",   background: '#f6cda7' },
    { path: "sld-mozart.jpg",    background: '#f5a46f' },
    { path: "sld-shaw.jpg",      background: '#c5c5c5' },
    { path: "sld-tommy1.jpg",    background: '#d4b194' },
    { path: "sld-waits.jpg",     background: '#c1c1c1' },
    { path: "sld-adams.jpg",     background: '#d1f1ff' }
  ];
  
  (() => {
    random_index = Math.floor(Math.random() * pb.length);
    selected_pb = pb[random_index]

    document.getElementById('slider').style.backgroundImage = `url('/static/images/${selected_pb.path}')`
    document.getElementById('welcome-section').style.backgroundColor = selected_pb.background
  })();
}