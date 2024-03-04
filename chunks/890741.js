function(e, t, n) {
    "use strict";
    var r = n("911718"),
        a = n("314970"),
        o = n("825089"),
        i = r("%TypeError%"),
        s = r("%WeakMap%", !0),
        u = r("%Map%", !0),
        l = a("WeakMap.prototype.get", !0),
        c = a("WeakMap.prototype.set", !0),
        d = a("WeakMap.prototype.has", !0),
        f = a("Map.prototype.get", !0),
        p = a("Map.prototype.set", !0),
        m = a("Map.prototype.has", !0),
        h = function(e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        y = function(e, t) {
            var n = h(e, t);
            return n && n.value
        },
        _ = function(e, t, n) {
            var r = h(e, t);
            r ? r.value = n : e.next = {
                key: t,
                next: e.next,
                value: n
            }
        };
    e.exports = function() {
        var e, t, n, r = {
            assert: function(e) {
                if (!r.has(e)) throw new i("Side channel does not contain " + o(e))
            },
            get: function(r) {
                if (s && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return l(e, r)
                } else if (u) {
                    if (t) return f(t, r)
                } else if (n) return y(n, r)
            },
            has: function(r) {
                if (s && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return d(e, r)
                } else if (u) {
                    if (t) return m(t, r)
                } else if (n) return !!h(n, r);
                return !1
            },
            set: function(r, a) {
                s && r && ("object" == typeof r || "function" == typeof r) ? (!e && (e = new s), c(e, r, a)) : u ? (!t && (t = new u), p(t, r, a)) : (!n && (n = {
                    key: {},
                    next: null
                }), _(n, r, a))
            }
        };
        return r
    }
}