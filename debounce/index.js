var debounce = function(fn, wait) {
    var timer;
    return function() {
        var self = this; // To keep the context
        var args = [].slice.call(arguments);
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(function() {
            fn.apply(self, args);
            clearTimeout(timer);
        }, wait);
    };
}

module.exports = debounce;