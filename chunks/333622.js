function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("500813");

    function u(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function s(e) {
        var t = e.attributes,
            n = e.children,
            o = e.leaf,
            s = e.text;
        if (o.commandName) {
            var l, c, f = i()(a.commandName, u({}, a.emptyText, "" === s.text));
            return r.createElement("span", (l = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), r.forEach(function(t) {
                        u(e, t, n[t])
                    })
                }
                return e
            }({}, t), c = (c = {
                className: f,
                spellCheck: !1
            }, c), Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(c)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(c)).forEach(function(e) {
                Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(c, e))
            }), l), n)
        }
        return null
    }
}