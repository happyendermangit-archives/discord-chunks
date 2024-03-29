function(e, t, n) {
    "use strict";
    var r = n("690244"),
        i = n("192853"),
        a = n("813426"),
        o = r("%TypeError%"),
        s = r("%WeakMap%", !0),
        u = r("%Map%", !0),
        c = i("WeakMap.prototype.get", !0),
        l = i("WeakMap.prototype.set", !0),
        d = i("WeakMap.prototype.has", !0),
        f = i("Map.prototype.get", !0),
        p = i("Map.prototype.set", !0),
        h = i("Map.prototype.has", !0),
        m = function(e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        g = function(e, t) {
            var n = m(e, t);
            return n && n.value
        },
        _ = function(e, t, n) {
            var r = m(e, t);
            r ? r.value = n : e.next = {
                key: t,
                next: e.next,
                value: n
            }
        };
    e.exports = function() {
        var e, t, n, r = {
            assert: function(e) {
                if (!r.has(e)) throw new o("Side channel does not contain " + a(e))
            },
            get: function(r) {
                if (s && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return c(e, r)
                } else if (u) {
                    if (t) return f(t, r)
                } else if (n) return g(n, r)
            },
            has: function(r) {
                if (s && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return d(e, r)
                } else if (u) {
                    if (t) return h(t, r)
                } else if (n) return !!m(n, r);
                return !1
            },
            set: function(r, i) {
                s && r && ("object" == typeof r || "function" == typeof r) ? (!e && (e = new s), l(e, r, i)) : u ? (!t && (t = new u), p(t, r, i)) : (!n && (n = {
                    key: {},
                    next: null
                }), _(n, r, i))
            }
        };
        return r
    }
}