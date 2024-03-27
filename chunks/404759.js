function(e, t, n) {
    var r = n("660326");

    function i(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var n = function() {
            var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                a = n.cache;
            if (a.has(i)) return a.get(i);
            var o = e.apply(this, r);
            return n.cache = a.set(i, o) || a, o
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, e.exports = i
}