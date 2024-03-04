function(e, t, n) {
    "use strict";
    var r;
    n("222007"), n("70102"), e.exports.timeout = function(e, t) {
        var n, i = new r;
        return Promise.race([e, new Promise(function(e, r) {
            n = setTimeout(function() {
                r(i)
            }, t)
        })]).then(function(e) {
            return clearTimeout(n), e
        }, function(e) {
            throw clearTimeout(n), e
        })
    }, (r = e.exports.TimeoutError = function() {
        Error.call(this), this.stack = Error().stack, this.message = "Timeout"
    }).prototype = Object.create(Error.prototype), r.prototype.name = "TimeoutError"
}