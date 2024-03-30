function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("423731"),
        a = n("290976"),
        u = n("700557"),
        s = n("208179"),
        l = n("172637"),
        c = n("867197"),
        f = n("941504");
    t.default = o.default.connectStores([a.default, i.default], function(e) {
        var t = e.node,
            n = e.guestWindow;
        return {
            enabled: (0, l.isFullScreen)(t, null == n ? void 0 : n.document)
        }
    })(function(e) {
        var t = e.enabled,
            n = function(e, t) {
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
            }(e, ["enabled"]),
            o = t ? f.default.Messages.EXIT_FULL_SCREEN : f.default.Messages.FULL_SCREEN,
            i = t ? s.default : u.default;
        return r.createElement(c.default, function(e) {
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
        }({
            label: o,
            iconComponent: i
        }, n))
    })
}