$(document).ready(function() {
  $("textarea").on('keyup', function() {
    var charCount = 140 - $(this).val().length;
    $(".counter").text(charCount);
    if (charCount < 0) {
      $(".counter").css("color", "red");
    }
  });
});