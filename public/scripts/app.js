/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [
  {
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
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function createTweetElement(tweet) {
 let $header = $("<header>");
 $header.append($("<img>").attr("src", tweet.user.avatars.small));
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

function renderTweets(tweets) {
  $("#tweet-container").empty();
  tweets.forEach(elm => {
    let $tweet = createTweetElement(elm)
    $('#tweet-container').prepend($tweet);
  })
}


$(document).ready(function() {
  renderTweets(data);
});