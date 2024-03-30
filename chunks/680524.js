function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("784184"),
        u = n("132637"),
        s = n("62957"),
        l = n("444077"),
        c = n("310178");

    function f(e) {
        var t = e.activity,
            n = e.user,
            o = e.channelId,
            f = e.guildId,
            d = e.source,
            _ = e.size,
            E = e.className,
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
            }(e, ["activity", "user", "channelId", "guildId", "source", "size", "className"]),
            m = (0, l.useSpotifySyncAction)(t, n, d, s.default.getNickname(f, o, n)),
            y = m.tooltip,
            I = m.loading,
            h = m.disabled,
            O = m.onClick;
        return r.createElement(a.Tooltip, {
            text: y
        }, function(e) {
            var n, o, s = e.onMouseEnter,
                l = e.onMouseLeave;
            return r.createElement(a.Button, (n = function(e) {
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
            }({}, p), o = (o = {
                size: i()(_, c.iconButtonSize),
                className: i()(E, c.iconButton),
                onClick: O,
                onMouseEnter: s,
                onMouseLeave: l,
                disabled: h,
                submitting: I,
                "aria-label": null != y ? y : t.name
            }, o), Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
            }), n), r.createElement(u.default, {
                className: c.listenAlongIcon
            }))
        })
    }
}