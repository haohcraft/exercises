var curry = function(func) {
    var numOfArgs = func.length;
    var args = [];
    var result = function() {
        var _args = [].slice.call(arguments);
        args = args.concat(_args);
        if(args.length < numOfArgs) {
            return result;
        } else {
            return func.apply(null, args);
        }
    };

    return result;
};

module.exports = curry;

