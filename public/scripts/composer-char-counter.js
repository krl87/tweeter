$(document).ready(function() {
  $("textarea").on('keyup', function() {
    $(".error1").slideUp();
    $(".error2").slideUp();
    var charCount = 140 - $(this).val().length;
    $(".counter").text(charCount);
    if (charCount > 140) {
      $(".counter").css("color", "red");
    }
  });
});