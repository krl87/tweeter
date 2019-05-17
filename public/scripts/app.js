/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// create html via jquery
function createTweetElement(tweet) {

 // return `<header>
 // <h1>${tweet.user.name}</h1>
 // `
 let $header = $("<header>").append($("<img>").attr("src", tweet.user.avatars.small));
 $header.append($("<h1>").text(tweet.user.name));
 $header.append($("<h2>").text(tweet.user.handle));
 let $content = $("<div>").text(tweet.content.text);
 let $footer = $("<footer>");
 $footer.append("<div>").text(tweet.created_at);
 let $iconDiv = $("<div>");
 $iconDiv.append($("<i>").addClass("fas fa-flag font-awesome"));
 $iconDiv.append($("<i>").addClass("fas fa-retweet font-awesome"));
 $iconDiv.append($("<i>").addClass("fas fa-heart font-awesome"));
 $footer.append($iconDiv);
 let $tweet = $("<article>").addClass("tweet");
 $tweet.append($header).append($content).append($footer);
 return $tweet;
}

//loop through tweet json and populate tweets
function renderTweets(tweets) {
  $("#tweet-container").empty();
  tweets.forEach(elm => {
    let $tweet = createTweetElement(elm)
    $('#tweet-container').prepend($tweet);
  })
}

//grab text from textarea to create tweet
function ajaxRequest() {
  $("form").on("submit", function(e){
    e.preventDefault();

  if ($("textarea").val() === "") {
    // alert("Please enter a tweet");
    $(".error1").slideDown();
  } else if ($("textarea").val().length > 140 ) {
    $(".error2").slideDown();
  } else  {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
      .done(function(){
        loadTweets();
      })
    }
  });
}

function loadTweets() {
  $.ajax({
    type: "GET",
    url: "/tweets",
  })
  .done(function(data){
    renderTweets(data);
  });
}



//fire functions
$(document).ready(function() {
  loadTweets();
  ajaxRequest();

  //toggle compose new-tweet with click/toggle and focus once complete
  $( ".compose" ).click(function() {
    $( ".new-tweet" ).slideToggle("slow", function (){
      $("textarea").focus();
    });
  });
});