var debounce = function(fn) {
    var args = [].slice.call(arguments, 1);
    var time = args[0];
    var timer;
    var isDebounced = false
    return function() {
        var _this = this;
        var _args = [].slice.call(arguments);
        if(timer) clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(_this, _args);
        }, time);
    };
}

module.exports = debounce;