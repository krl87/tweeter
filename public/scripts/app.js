
// Client-side JS logic goes here

//time helper function
function convertTime(time1, time2) {
  const msMin = 60 * 1000;
  const msHour = msMin * 60;
  const msDay = msHour * 24;
  const msMonth = msDay * 30;
  const msYear = msDay * 365;

  let timeDiff = time1 - time2;

  if (timeDiff < msMin) {
    return "Just now";
  } else if (timeDiff < msHour) {
    return Math.round(timeDiff / msMin) + " minutes ago";
  } else if (timeDiff < msDay) {
    return Math.round(timeDiff / msHour) + " hours ago";
  } else if (timeDiff < msMonth) {
    return Math.round(timeDiff / msDay) + " days ago";
  } else if (timeDiff < msYear) {
    return Math.round(timeDiff / msMonth) + " months ago";
  } else {
    return Math.round(timeDiff / msYear) + " years ago";
  }
}


// create html via jquery
function createTweetElement(tweet) {
  const tweetTime = convertTime(Date.now(), tweet.created_at);
  let $header = $("<header>").append($("<img>").attr("src", tweet.user.avatars.small));
  $header.append($("<h1>").text(tweet.user.name));
  $header.append($("<h2>").text(tweet.user.handle));
  let $content = $("<div>").text(tweet.content.text);
  let $footer = $("<footer>");
  $footer.append("<div>").text(tweetTime);
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
    $(".error1").slideDown();
  } else if ($("textarea").val().length > 140 ) {
      $(".error2").slideDown();
  } else {
      $.ajax({
        type: "POST",
        url: "/tweets",
        data: $(this).serialize()
      })
      .done(function(){
        loadTweets();
      })
    $("textarea").val("");
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