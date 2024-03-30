function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("725686"),
        i = n.n(o),
        a = n("784184"),
        u = n("143953"),
        s = n("595163"),
        l = n("444077"),
        c = n("310178");

    function f(e) {
        var t = e.activity,
            n = e.user,
            o = e.source,
            f = function(e, t) {
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
            }(e, ["activity", "user", "source"]),
            d = (0, l.useSpotifyPlayAction)(t, n, o),
            _ = d.label,
            E = d.tooltip,
            p = d.loading,
            m = d.disabled,
            y = d.onClick;
        return r.createElement(a.Tooltip, {
            text: E
        }, function(e) {
            var t, n, o = e.onMouseEnter,
                l = e.onMouseLeave;
            return r.createElement(a.Button, (t = function(e) {
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
            }({}, i()(f, ["channelId", "guildId"])), n = (n = {
                onClick: y,
                onMouseEnter: o,
                onMouseLeave: l,
                disabled: m,
                submitting: p
            }, n), Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t), r.createElement(u.default, {
                align: u.default.Align.CENTER
            }, r.createElement(s.default, {
                className: c.spotifyButtonLogo
            }), _))
        })
    }
}