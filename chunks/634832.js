function(e, t, n) {
    var r = Date.now;
    e.exports = function(e) {
        var t = 0,
            n = 0;
        return function() {
            var i = r(),
                o = 16 - (i - n);
            if (n = i, o > 0) {
                if (++t >= 800) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}