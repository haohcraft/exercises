var debounce = function(fnc, timestamp) {
	var timer;
	return function() {
		var args = [].slice.apply(arguments);
		var _this = this;
		clearTimeout(timer);
		timer = setTimeout(function() {
			fnc.apply(_this, args);
			clearTimeout(timer);
		}, timestamp);
	};
};

module.exports = debounce;