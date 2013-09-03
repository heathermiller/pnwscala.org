

// Configure Google Maps

function initialize() {
  
  var leftbank = new google.maps.LatLng(45.534641,-122.667030);

  var mapOptions = { 
    scrollwheel: false, 
    zoom: 11, 
    center: leftbank, 
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map_canvas = document.getElementById('map_canvas');

  var map = new google.maps.Map( map_canvas, mapOptions );

  var marker = new google.maps.Marker({
      position: leftbank, map: map, title: 'Left Bank, 101 N Weidler St, Portland, OR'
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


$(document).ready(function () {
  var tooltipSettings = {animation: false, placement: 'bottom' };
  $('.scheduleContents td a').tooltip( tooltipSettings );
  $('.scheduleContents td a').click(function(){$(this).tooltip('hide')});

  var noclick = function(e) { e.preventDefault(); }
  $('.scheduleContents td a.SessionSummary').click(noclick);
  $('.scheduleContents td a.SpeakerBio').click(noclick);
});




