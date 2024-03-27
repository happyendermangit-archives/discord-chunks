function(t, e, n) {
    var r = n("657398"),
        i = n("706627");
    t.exports = function(t) {
        if (!i(t)) return !1;
        var e = r(t);
        return "[object Function]" == e || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
    }
}