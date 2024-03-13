function(t, e, n) {
    var r = n("94136"),
        i = n("427507"),
        o = n("139427"),
        a = parseFloat,
        u = Math.min,
        s = Math.random;
    t.exports = function(t, e, n) {
        if (n && "boolean" != typeof n && i(t, e, n) && (e = n = void 0), void 0 === n && ("boolean" == typeof e ? (n = e, e = void 0) : "boolean" == typeof t && (n = t, t = void 0)), void 0 === t && void 0 === e ? (t = 0, e = 1) : (t = o(t), void 0 === e ? (e = t, t = 0) : e = o(e)), t > e) {
            var c = t;
            t = e, e = c
        }
        if (n || t % 1 || e % 1) {
            var l = s();
            return u(t + l * (e - t + a("1e-" + ((l + "").length - 1))), e)
        }
        return r(t, e)
    }
}