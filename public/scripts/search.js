$('#campground-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all"
  }
  $.get('/campgrounds?' + search, function(data) {
    $('#campground-grid').html('');
    data.forEach(function(campground) {
      $('#campground-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail indexThumbnail">
            <img src="${ campground.image }">
            <div class="caption">
              <a href="/campgrounds/${ campground._id }"><h4>${ campground.name }</h4></a>
            </div>
          </div>
        </div>
      `);
    });
  });
});

$('#campground-search').submit(function(event) {
  event.preventDefault();
});