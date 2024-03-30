function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("302454"),
        i = n.n(o),
        a = n("784184");

    function u(e) {
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

    function s(e, t) {
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

    function l(e) {
        return e.paragraph = s(u({}, e.paragraph), {
            react: function(e, t, n) {
                return r.createElement("p", {
                    key: n.key
                }, t(e.content, n))
            }
        }), e.link = s(u({}, e.link), {
            react: function(e, t, n) {
                var o = {};
                if (null != e.context) {
                    var s = e.context[e.target];
                    s && s.onClick ? (o.onClick = s.onClick, o.onContextMenu = s.onContextMenu) : o.onClick = s
                }
                return null == o.onClick && (o.href = i().sanitizeUrl(e.target)), r.createElement(a.Anchor, u({
                    key: n.key,
                    title: e.title
                }, o), t(e.content, n))
            }
        }), e
    }
}