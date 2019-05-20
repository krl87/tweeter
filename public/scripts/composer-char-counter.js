// change counter colour to red if over character limit, hide error messages
$(document).ready(function() {
  $("textarea").on('keyup', function() {
    $(".error1").slideUp();
    $(".error2").slideUp();
    var charCount = 140 - $(this).val().length;
    $(".counter").text(charCount);
    if (charCount < 0) {
      $(".counter").css("color", "red");
    } else {
      $(".counter").css("color", "black");
    }
  });
});