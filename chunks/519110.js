function(e, t, r) {
    var n = r("33426"),
        u = r("226741"),
        a = r("270879"),
        o = Object.prototype,
        i = Function.prototype.toString,
        s = o.hasOwnProperty,
        l = i.call(Object);
    e.exports = function(e) {
        if (!a(e) || "[object Object]" != n(e)) return !1;
        var t = u(e);
        if (null === t) return !0;
        var r = s.call(t, "constructor") && t.constructor;
        return "function" == typeof r && r instanceof r && i.call(r) == l
    }
}