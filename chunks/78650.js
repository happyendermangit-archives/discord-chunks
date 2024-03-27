function(e, t, n) {
    var r = n("314545"),
        i = n("757209"),
        a = n("373640"),
        o = parseFloat,
        s = Math.min,
        u = Math.random;
    e.exports = function(e, t, n) {
        if (n && "boolean" != typeof n && i(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = a(e), void 0 === t ? (t = e, e = 0) : t = a(t)), e > t) {
            var c = e;
            e = t, t = c
        }
        if (n || e % 1 || t % 1) {
            var l = u();
            return s(e + l * (t - e + o("1e-" + ((l + "").length - 1))), t)
        }
        return r(e, t)
    }
}