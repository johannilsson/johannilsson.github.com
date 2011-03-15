// Twitter Reactions by Robert Nyman.
// http://robertnyman.com/2010/11/28/javascript-badge-to-present-twitter-reactions-to-a-certain-url-in-your-own-web-site/
function twitterReactions (json) {
	// Checking the JSON response
	var results = json.response.list;
		
	// If there are any results, iterate over them			
	if (typeof results !== "undefined") {
		var resultsLength = results.length,
			twitterReactionsPresenter = document.getElementById("twitter-reactions"),
			twitterReactionsHeader = document.createElement("h3"),
			tweets = '<ul class="comments">',
			twitterReactionsText = resultsLength + " Twitter reaction" + ((resultsLength > 1)? "s" : ""),
			current,
			currentAuthor,
			tweet;

        if (resultsLength == 0) {
            return;
        }
		// Creating header before tweets container
		twitterReactionsHeader.id = "twitter-reactions-header";
		twitterReactionsHeader.innerHTML = twitterReactionsText;
		twitterReactionsPresenter.parentNode.insertBefore(twitterReactionsHeader, twitterReactionsPresenter);

		// Iterating over all tweets
		for (var i=resultsLength-1; i>=0; i--) {
			current = results[i];
			currentAuthor = current.author;
			tweet = '<li>';
			tweet += '<img src="' + currentAuthor.photo_url + '" alt="" width="48" height="48" alt="">';
			tweet += '<a href="' + currentAuthor.url + '">' + currentAuthor.nick + " (" + currentAuthor.name + ")" + "</a><br>";
			tweet += current.date_alpha;
			tweet += '<div class="comment-text">' + current.content.replace(/(http:\/\/[\w\.\d%\/\-\_]+)/gi, '<a href="$1">$1</a>') + '</div>';
			tweet += '</li>';
			tweets += tweet;
		}
		tweets += '</ul>';

		// Apply all tweets into the tweet presenting element
	    twitterReactionsPresenter.innerHTML = tweets;
	}
}
