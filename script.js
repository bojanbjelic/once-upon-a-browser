Array.prototype.slice.call(document.getElementsByTagName('body')[0].getElementsByTagName('*')).forEach(function(el){el.style['-webkit-transform']='rotate('+(Math.random()*120)+'deg)' });