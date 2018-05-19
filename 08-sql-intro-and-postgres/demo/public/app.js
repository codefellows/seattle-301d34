'use strict';

$(document).ready(pageLoad);

$('#event-form').on('submit', function(e) {
  e.preventDefault();
  let data = {
    title: e.target.title.value,
    date: e.target.date.value,
    tickets: e.target.tickets.value,
    host: e.target.host.value
  };

  $.post('/events', data)
    .then(function() {
      pageLoad();
    });
});


function pageLoad() {
  $.get('/events')
    .then(
      function(data) {
        console.log(data);
        $('#results').empty();

        data.rows.forEach(function(item) {
          let content = `
          <h2>${item.title}</h2>
          <p>date: ${item.date}</p>
          <p>tickets: ${item.tickets}</p>
          <p>host: ${item.host}</p>
        `;
          $('#results').append(content);
        });
      },
      function(err) {
        console.error(err);
      }
    );
}
