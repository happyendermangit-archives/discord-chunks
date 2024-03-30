function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        LinkMarkupRule: function() {
            return c
        }
    });
    var r, a, o = n("470079"),
        l = n("302454"),
        i = n.n(l),
        u = n("784184");
    var c = (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, a, o;
                r = e, a = t, o = n[t], a in r ? Object.defineProperty(r, a, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[a] = o
            })
        }
        return e
    }({}, i().defaultRules.link), a = (a = {
        react: function(e, t, n) {
            return o.createElement(u.Anchor, {
                href: e.target,
                target: "_blank"
            }, t(e.content, n))
        }
    }, a), Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
        }
        return n
    })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
    }), r)
}