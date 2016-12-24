jQuery(document).ready(function($) {
  $(function() {
    $('a').click(function() {
      $('html, body').animate({
        scrollTop: $(this.hash).offset().top
      }, 400);
      return false;
    });
  });

});


