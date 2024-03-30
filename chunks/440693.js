function(t, e, r) {
    var n = r("56135"),
        i = Object.prototype,
        o = i.hasOwnProperty,
        u = i.toString,
        c = n ? n.toStringTag : void 0;
    t.exports = function(t) {
        var e = o.call(t, c),
            r = t[c];
        try {
            t[c] = void 0;
            var n = !0
        } catch (t) {}
        var i = u.call(t);
        return n && (e ? t[c] = r : delete t[c]), i
    }
}