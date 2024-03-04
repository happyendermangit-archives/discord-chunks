function(e, t, n) {
    var r = n("68421"),
        i = n("566040"),
        o = n("323033"),
        s = parseFloat,
        a = Math.min,
        c = Math.random;
    e.exports = function(e, t, n) {
        if (n && "boolean" != typeof n && i(e, t, n) && (t = n = void 0), void 0 === n && ("boolean" == typeof t ? (n = t, t = void 0) : "boolean" == typeof e && (n = e, e = void 0)), void 0 === e && void 0 === t ? (e = 0, t = 1) : (e = o(e), void 0 === t ? (t = e, e = 0) : t = o(t)), e > t) {
            var u = e;
            e = t, t = u
        }
        if (n || e % 1 || t % 1) {
            var d = c();
            return a(e + d * (t - e + s("1e-" + ((d + "").length - 1))), t)
        }
        return r(e, t)
    }
}