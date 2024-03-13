function(t, r, e) {
    var n = e("60297"),
        o = e("952133");
    t.exports = function(t) {
        if (!o(t)) return !1;
        var r = n(t);
        return "[object Function]" == r || "[object GeneratorFunction]" == r || "[object AsyncFunction]" == r || "[object Proxy]" == r
    }
}