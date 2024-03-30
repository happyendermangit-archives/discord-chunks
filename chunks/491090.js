function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("947403"),
        i = n("585949"),
        a = n("650655"),
        u = n("354368"),
        s = n("867197"),
        l = n("941504");

    function c(e) {
        var t, n, c = e.centerButton,
            f = e.channel,
            d = e.onClick,
            _ = e.onMouseEnter,
            E = e.onMouseLeave,
            p = function(e, t) {
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
            }(e, ["centerButton", "channel", "onClick", "onMouseEnter", "onMouseLeave"]),
            m = void 0 !== c && c ? s.CenterControlButton : s.default,
            y = f.isBroadcastChannel(),
            I = (0, u.useIsBroadcastingInChannel)(f.id),
            h = (0, o.useEndCallLottie)(),
            O = h.Component,
            T = h.events;
        return r.createElement(m, (t = function(e) {
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
        }({}, p), n = (n = {
            onClick: function() {
                I && (0, a.stopBroadcast)(), i.default.disconnect(), null == d || d()
            },
            iconComponent: O,
            onMouseEnter: function(e) {
                null == _ || _(e), T.onMouseEnter()
            },
            onMouseLeave: function(e) {
                null == E || E(e), T.onMouseLeave()
            },
            label: I ? l.default.Messages.STOP_BROADCASTING : y ? l.default.Messages.LEAVE_BROADCAST : l.default.Messages.DISCONNECT_SELF
        }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
    }
}