function(t, e, n) {
    var r = n("302767");

    function i(t, e) {
        if ("function" != typeof t || null != e && "function" != typeof e) throw TypeError("Expected a function");
        var n = function() {
            var r = arguments,
                i = e ? e.apply(this, r) : r[0],
                a = n.cache;
            if (a.has(i)) return a.get(i);
            var o = t.apply(this, r);
            return n.cache = a.set(i, o) || a, o
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, t.exports = i
}