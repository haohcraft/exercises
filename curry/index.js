
// key points: 
// 1. [].slice.call(arguments)
// 2. concat current arguments to existing ones
// 
var curry = function(fnc) {
	var fncLeng = fnc.length;
	var curried = function() {
		var args = [].slice.call(arguments);
		if(args.length === fncLeng) {
			return fnc.apply(null, args);
		} else {
			return function() {
				var _args = [].slice.call(arguments);
				return curried.apply(null, args.concat(_args));
			};
		}
	};

	return curried;
};


module.exports = curry;