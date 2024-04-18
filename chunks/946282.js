function(e, t, n) {
    var o = n("444675");
    (function() {
        var t, n, r, i, a;
        "undefined" != typeof performance && null !== performance && performance.now ? e.exports = function() {
            return performance.now()
        } : null != o && o.hrtime ? (e.exports = function() {
            return (t() - a) / 1e6
        }, n = o.hrtime, i = (t = function() {
            var e;
            return 1e9 * (e = n())[0] + e[1]
        })(), a = i - 1e9 * o.uptime()) : Date.now ? (e.exports = function() {
            return Date.now() - r
        }, r = Date.now()) : (e.exports = function() {
            return new Date().getTime() - r
        }, r = new Date().getTime())
    }).call(this)
}