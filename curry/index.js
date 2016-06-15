var curry = function(func) {
    var numOfArgs = func.length;
    function curried () {
        var args = [].slice.call(arguments);
        if(args.length < numOfArgs) {
            return function() {
                var _args = [].slice.call(arguments);
                return curried.apply(null, args.concat(_args))   
            };
        } else {
            return func.apply(null, args);
        }
    };

    return curried;
};

module.exports = curry;

