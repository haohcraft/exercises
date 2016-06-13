var curry = function(func) {
    var numOfArgs = func.length;
    var curried = function() {
        this.args = this.args || [];
        var _args = [].slice.call(arguments);
        this.args = this.args.concat(_args);
        if(this.args.length < numOfArgs) {
            return curried;
        } else {
            var result = func.apply(null, this.args);
            this.args = [];
            return result;
        }
    };

    return curried;
};

module.exports = curry;

