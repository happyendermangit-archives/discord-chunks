function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        default: function() {
            return c
        }
    });
    var n = r("470079"),
        o = r("447078"),
        a = r("21397"),
        l = r("970930");

    function c(e) {
        var t, r, c, s, i = (0, l.default)(e.message),
            u = (0, o.renderSystemTag)({
                message: e.message,
                channel: e.channel,
                user: null !== (s = null === (c = e.message) || void 0 === c ? void 0 : c.author) && void 0 !== s ? s : e.userOverride,
                compact: !!e.compact,
                isRepliedMessage: !!e.isRepliedMessage
            }),
            f = {};
        return null != u && (f[a.UsernameDecorationTypes.SYSTEM_TAG] = u), n.createElement(a.default, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n, o, a;
                    n = e, o = t, a = r[t], o in n ? Object.defineProperty(n, o, {
                        value: a,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[o] = a
                })
            }
            return e
        }({}, e), r = (r = {
            author: i,
            decorations: f
        }, r), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var r = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                r.push.apply(r, n)
            }
            return r
        })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
    }
}