var curry = function(func) {
    var numOfArgs = func.length;
    var result = function() {
        this.args = this.args || [];
        var _args = [].slice.call(arguments);
        this.args = this.args.concat(_args);
        if(args.length < numOfArgs) {
            return result.bind({args: _args});
        } else {
            return func.apply(null, args);
        }
    };

    return result;
};

module.exports = curry;

