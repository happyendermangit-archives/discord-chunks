function(t, e, n) {
    var r = n("466293"),
        i = Object.prototype,
        a = i.hasOwnProperty,
        o = i.toString,
        s = r ? r.toStringTag : void 0;
    t.exports = function(t) {
        var e = a.call(t, s),
            n = t[s];
        try {
            t[s] = void 0;
            var r = !0
        } catch (t) {}
        var i = o.call(t);
        return r && (e ? t[s] = n : delete t[s]), i
    }
}