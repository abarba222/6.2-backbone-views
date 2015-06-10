(function(){
  'use strict';

  $(document).ready(function(){
    $('body').prepend(JST.application());
    $('.like-button').html(JST.like());
  });
})();
