function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        a = n("609879"),
        o = n("648758"),
        l = n("393158"),
        i = n("952836");
    t.default = function(e) {
        var t, n, u = e.node.info;
        var c = r.useRef(a.default.reactParserFor((t = function(e) {
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
        }({}, a.default.defaultRules), n = (n = {
            link: l.LinkMarkupRule
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t)));
        return null == u ? null : r.createElement(o.default, {
            className: i.infoBox,
            messageType: o.HelpMessageTypes.INFO
        }, c.current(u))
    }
}