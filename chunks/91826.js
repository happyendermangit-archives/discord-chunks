function(e, t, n) {
    "use strict";
    var r = n("606862"),
        i = n("169742"),
        a = n("160171"),
        o = n("192853"),
        s = n("49662"),
        u = o("Object.prototype.toString"),
        c = n("703825")(),
        l = "undefined" == typeof globalThis ? n.g : globalThis,
        d = i(),
        f = o("String.prototype.slice"),
        p = Object.getPrototypeOf,
        h = o("Array.prototype.indexOf", !0) || function(e, t) {
            for (var n = 0; n < e.length; n += 1)
                if (e[n] === t) return n;
            return -1
        },
        m = {
            __proto__: null
        };
    c && s && p ? r(d, function(e) {
        var t = new l[e];
        if (Symbol.toStringTag in t) {
            var n = p(t),
                r = s(n, Symbol.toStringTag);
            !r && (r = s(p(n), Symbol.toStringTag)), m["$" + e] = a(r.get)
        }
    }) : r(d, function(e) {
        var t = new l[e];
        m["$" + e] = a(t.slice)
    });
    var g = function(e) {
            var t = !1;
            return r(m, function(n, r) {
                if (!t) try {
                    "$" + n(e) === r && (t = f(r, 1))
                } catch (e) {}
            }), t
        },
        _ = function(e) {
            var t = !1;
            return r(m, function(n, r) {
                if (!t) try {
                    n(e), t = f(r, 1)
                } catch (e) {}
            }), t
        };
    e.exports = function(e) {
        if (!e || "object" != typeof e) return !1;
        if (!c) {
            var t = f(u(e), 8, -1);
            return h(d, t) > -1 ? t : "Object" === t && _(e)
        }
        return s ? g(e) : null
    }
}