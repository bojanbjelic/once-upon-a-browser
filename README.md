#Once upon a browser
Fun bookmarklet to randomly rotate elements on the page.

Drag this link to your bookmarks bar: [Once upon a browser] [bkmrklt]

Based on the idea presented in the article [Spinning the Web](http://meyerweb.com/eric/thoughts/2011/06/03/spinning-the-web/) by Eric Meyer.

Here is Eric's [Flickr set](http://www.flickr.com/photos/meyerweb/sets/72157626750845115/with/5793617592/), and [here's mine](http://www.flickr.com/photos/bojanbjelic/sets/72157630173696042/).

[bkmrklt]: <javascript:Array.prototype.slice.call( document.getElementsByTagName('body')[0].getElementsByTagName('*') ).forEach(function(el){ ['-webkit-transform','-ms-transform','transform','MozTransform'].forEach(function(s){ if (el.style[s]!=undefined) { el.style[s]='rotate('+(Math.random()*120)+'deg)' } }) })>