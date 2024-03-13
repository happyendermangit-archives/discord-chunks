function(t, r, e) {
    e("70102");
    var n = e("933625");

    function o(t, r) {
        if ("function" != typeof t || null != r && "function" != typeof r) throw TypeError("Expected a function");
        var e = function() {
            var n = arguments,
                o = r ? r.apply(this, n) : n[0],
                i = e.cache;
            if (i.has(o)) return i.get(o);
            var a = t.apply(this, n);
            return e.cache = i.set(o, a) || i, a
        };
        return e.cache = new(o.Cache || n), e
    }
    o.Cache = n, t.exports = o
}