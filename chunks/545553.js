function(e, t, n) {
    var r = n("903425"),
        i = n("286113"),
        a = n("533206"),
        o = Object.prototype,
        s = Function.prototype.toString,
        u = o.hasOwnProperty,
        c = s.call(Object);
    e.exports = function(e) {
        if (!a(e) || "[object Object]" != r(e)) return !1;
        var t = i(e);
        if (null === t) return !0;
        var n = u.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == c
    }
}