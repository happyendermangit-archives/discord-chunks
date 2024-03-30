function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("302454");

    function i(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                var r, o, i;
                r = e, o = t, i = n[t], o in r ? Object.defineProperty(r, o, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : r[o] = i
            })
        }
        return e
    }

    function a(e, t) {
        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e
    }

    function u(e) {
        return e.heading = o.defaultRules.heading, e.lheading = o.defaultRules.lheading, e.list = o.defaultRules.list, e.paragraph = a(i({}, e.paragraph), {
            react: function(e, t, n) {
                return r.createElement("p", {
                    key: n.key
                }, t(e.content, n))
            }
        }), e.link = a(i({}, e.link), {
            react: function(e, t, n) {
                var u, s = {};
                if (null != e.context) {
                    var l = e.context[e.target];
                    l && l.onClick ? (s.onClick = l.onClick, s.onContextMenu = l.onContextMenu) : s.onClick = l
                }
                return null == s.onClick && (s.href = null !== (u = (0, o.sanitizeUrl)(e.target)) && void 0 !== u ? u : void 0, s.target = "_blank"), r.createElement("a", a(i({
                    key: n.key,
                    title: e.title
                }, s), {
                    rel: "noreferrer"
                }), t(e.content, n))
            }
        }), e
    }
}