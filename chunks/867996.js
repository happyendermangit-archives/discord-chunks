function(e, t, n) {
    var r = n("903425"),
        i = n("661233");
    e.exports = function(e) {
        if (!i(e)) return !1;
        var t = r(e);
        return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
    }
}