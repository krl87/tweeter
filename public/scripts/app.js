/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

function createTweetElement(tweet) {
 let $header = $("<header>");
 $header.append($("<img>").attr("src", tweet.user.avatars.small));
 $header.append($("<h1>").text(tweet.user.name));
 $header.append($("<h3>").text(tweet.user.handle));
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



$(document).ready(function() {
  const $tweet = createTweetElement(tweetData);
  console.log($tweet);
  $('#tweet-container').append($tweet);
});