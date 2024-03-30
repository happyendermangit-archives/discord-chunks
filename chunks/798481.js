function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("302454"),
        i = n.n(o),
        a = n("784184"),
        u = n("649455"),
        s = n("396586"),
        l = n("254093");
    t.default = r.memo(function(e) {
        e.onClick, e.trusted;
        var t, n, o = e.title,
            c = e.href,
            f = e.children,
            d = (e.messageId, e.channelId, function(e, t) {
                if (null == e) return {};
                var n, r, o = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && (o[n] = e[n]);
                    return o
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) {
                        if (n = i[r], !(t.indexOf(n) >= 0)) Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                }
                return o
            }(e, ["onClick", "trusted", "title", "href", "children", "messageId", "channelId"])),
            _ = (0, s.default)(u.default.MASKED_LINK).analyticsLocations,
            E = r.useCallback(function(t) {
                return (0, l.handleClick)(e, t, _)
            }, [_, e]),
            p = r.useCallback(function(e) {
                1 === e.button && E(e)
            }, [E]),
            m = i().sanitizeUrl(c);
        return r.createElement(a.Anchor, (t = function(e) {
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
        }({}, d), n = (n = {
            title: o,
            target: "_blank",
            rel: "noreferrer noopener",
            href: m,
            onClick: E,
            onAuxClick: p
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), null != f ? f : o)
    })
}