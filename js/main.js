window.addEventListener('load', function() {
  var _ = require('underscore');
  var data = require('./second');
  var musicTemplate = _.template(document.getElementById('music-template').textContent);

  for (var i = 0; i < data.length; i++) {
    var artists = musicTemplate({
      id: data[i].id,
      name: data[i].name,
      type: data[i].type,
      location: data[i].location,
    });

    var create = document.createElement('div');
    create.classList.add('data');
    //Set the ID
    create.setAttribute('id', 'type-' + data[i].id);
    create.innerHTML = artists;
    var parent = document.getElementById('results');
    parent.appendChild(create);
  }

  $(function() {
    $('#results div').draggable({
      appendTo: "body",
      helper: "clone"
        // });
        // $('#adding div').droppable({
        //   appendTo: "#adding"
    });
  });
});