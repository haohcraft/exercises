var debounce = function(fn) {
    var args = [].slice.call(arguments, 1);
    var time = args[0];
    var timer;
    var isDebounced = false
    return function() {
        var _this = this;
        var _args = [].slice.call(arguments);
        if(!isDebounced) {
            timer = setTimeout(function() {
                fn.apply(_this, _args);
                isDebounced = false;
            }, time);
            isDebounced = true;
        } else {
            clearTimeout(timer);
            timer = setTimeout(function() {
                fn.apply(_this, _args);
                isDebounced = false;
            }, time);
        }
    };
}

module.exports = debounce;