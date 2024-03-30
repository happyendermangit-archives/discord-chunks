function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("597763"),
        i = n("867197"),
        a = n("941504");

    function u(e) {
        var t = e.isSelfStream,
            n = e.centerButton,
            u = e.onMouseEnter,
            s = e.onMouseLeave,
            l = function(e, t) {
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
            }(e, ["isSelfStream", "centerButton", "onMouseEnter", "onMouseLeave"]),
            c = void 0 !== n && n ? i.CenterControlButton : i.default,
            f = (0, o.useScreenshareLottie)("disable"),
            d = f.Component,
            _ = f.events;
        return r.createElement(c, function(e) {
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
            label: t ? a.default.Messages.STOP_STREAMING : a.default.Messages.STOP_WATCHING,
            iconComponent: d,
            isActive: !0,
            onMouseEnter: function(e) {
                null == u || u(e), _.onMouseEnter()
            },
            onMouseLeave: function(e) {
                null == s || s(e), _.onMouseLeave()
            }
        }, l))
    }
}