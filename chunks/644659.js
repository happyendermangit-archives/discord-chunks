function(t, r, n) {
    "use strict";
    var e, o, i, u = n("197047"),
        c = n("161581"),
        s = n("622281"),
        f = n("251069"),
        a = n("740362"),
        p = n("801127"),
        l = n("883539"),
        v = n("624906"),
        y = "Object already initialized",
        b = c.TypeError,
        h = c.WeakMap;
    if (u || p.state) {
        var g = p.state || (p.state = new h);
        g.get = g.get, g.has = g.has, g.set = g.set, e = function(t, r) {
            if (g.has(t)) throw b(y);
            return r.facade = t, g.set(t, r), r
        }, o = function(t) {
            return g.get(t) || {}
        }, i = function(t) {
            return g.has(t)
        }
    } else {
        var x = l("state");
        v[x] = !0, e = function(t, r) {
            if (a(t, x)) throw b(y);
            return r.facade = t, f(t, x, r), r
        }, o = function(t) {
            return a(t, x) ? t[x] : {}
        }, i = function(t) {
            return a(t, x)
        }
    }
    t.exports = {
        set: e,
        get: o,
        has: i,
        enforce: function(t) {
            return i(t) ? o(t) : e(t, {})
        },
        getterFor: function(t) {
            return function(r) {
                var n;
                if (!s(r) || (n = o(r)).type !== t) throw b("Incompatible receiver, " + t + " required");
                return n
            }
        }
    }
}