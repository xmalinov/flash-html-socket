(function () {

  function logOrientation() {
    if (window.orientation == 0) // Portrait
    {
      $('#log-message-block').text('Portrait');
    } else // Landscape
    {
      $('#log-message-block').text('Landscape');
    }
  }

  $(window).on('load', function () {
    logOrientation();
  });

  $(window).on('orientationchange', function () {
    logOrientation();
  });

  var i=0;

  $('#left-btn').on('touchstart click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
      $('#log-events-block').text('');
      $('#log-events-block').text('Left btn click (' + i + ')');
      i++;
      console.log('Left btn click');
      event.handled = true;
    } else {
      return false;
    }
  });

  $('#right-btn').on('touchstart click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
      $('#log-events-block').text('');
      $('#log-events-block').text('Right btn click (' + i + ')');
      i++;
      console.log('Right btn click');
      event.handled = true;
    } else {
      return false;
    }
  });

  $('#test-btn').on('touchstart click', function (event) {
    event.stopPropagation();
    event.preventDefault();
    if (event.handled !== true) {
      $('#log-events-block').text('');
      $('#log-events-block').text('Test btn click (' + i + ')');
      i++;
      console.log('Test btn click');
      event.handled = true;
    } else {
      return false;
    }
  });

})();
