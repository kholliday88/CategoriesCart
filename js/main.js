window.addEventListener('load', function() {
  var _ = require('underscore');
  var data = require('./second');
  var musicTemplate = _.template(document.getElementById('music-template').textContent);

  for (var i = 0; i < data.length; i++) {
    var artists = musicTemplate({
      name: data[i].name,
      type: data[i].type,
      location: data[i].location,
    });
    console.log(artists);

    var music = document.createElement('div');
    music.innerHTML = artists;
    var parent = document.getElementById('results');
    parent.appendChild(music);
    console.log(music);
  }
});