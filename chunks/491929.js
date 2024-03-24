function(e, t, n) {
    "use strict";
    var r = n("20042"),
        i = n("226966"),
        o = n("825089"),
        s = n("103861"),
        a = r("%WeakMap%", !0),
        c = r("%Map%", !0),
        u = i("WeakMap.prototype.get", !0),
        d = i("WeakMap.prototype.set", !0),
        l = i("WeakMap.prototype.has", !0),
        f = i("Map.prototype.get", !0),
        p = i("Map.prototype.set", !0),
        h = i("Map.prototype.has", !0),
        v = function(e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
                if (n.key === t) return r.next = n.next, n.next = e.next, e.next = n, n
        },
        g = function(e, t) {
            var n = v(e, t);
            return n && n.value
        },
        b = function(e, t, n) {
            var r = v(e, t);
            r ? r.value = n : e.next = {
                key: t,
                next: e.next,
                value: n
            }
        };
    e.exports = function() {
        var e, t, n, r = {
            assert: function(e) {
                if (!r.has(e)) throw new s("Side channel does not contain " + o(e))
            },
            get: function(r) {
                if (a && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return u(e, r)
                } else if (c) {
                    if (t) return f(t, r)
                } else if (n) return g(n, r)
            },
            has: function(r) {
                if (a && r && ("object" == typeof r || "function" == typeof r)) {
                    if (e) return l(e, r)
                } else if (c) {
                    if (t) return h(t, r)
                } else if (n) return !!v(n, r);
                return !1
            },
            set: function(r, i) {
                a && r && ("object" == typeof r || "function" == typeof r) ? (!e && (e = new a), d(e, r, i)) : c ? (!t && (t = new c), p(t, r, i)) : (!n && (n = {
                    key: {},
                    next: null
                }), b(n, r, i))
            }
        };
        return r
    }
}