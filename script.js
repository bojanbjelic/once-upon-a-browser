Array.prototype.slice.call(
    document.getElementsByTagName('body')[0].getElementsByTagName('*')
).forEach(function(el){
    ['-webkit-transform','-ms-transform','transform','MozTransform'].forEach(function(s){
        if (el.style[s]!=undefined) {
            el.style[s]='rotate('+(Math.random()*120)+'deg)'
        }
    });
    ['-webkit-transition','-ms-transition','transition','MozTransition'].forEach(function(s){
        if (el.style[s]!=undefined) {
            el.style[s]='all 1.5s ease-in-out'
        }
    })
})