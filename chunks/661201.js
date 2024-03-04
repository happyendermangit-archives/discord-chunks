function(e, t, n) {
    n("70102");
    var r = n("664007");

    function i(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw TypeError("Expected a function");
        var n = function() {
            var r = arguments,
                i = t ? t.apply(this, r) : r[0],
                o = n.cache;
            if (o.has(i)) return o.get(i);
            var s = e.apply(this, r);
            return n.cache = o.set(i, s) || o, s
        };
        return n.cache = new(i.Cache || r), n
    }
    i.Cache = r, e.exports = i
}