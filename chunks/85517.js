function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useAnimatedAvatarSrc: function() {
            return f
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("622780"),
        a = n("992877"),
        u = n("957808"),
        s = n("290976"),
        l = n("939350");

    function c(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function f(e) {
        var t, n, f = e.user,
            d = e.guildId,
            _ = e.size,
            E = e.showPending,
            p = void 0 !== E && E,
            m = e.animateOnHover,
            y = e.avatarOverride;
        var I = (t = r.useState(!1), n = 2, function(e) {
                if (Array.isArray(e)) return e
            }(t) || function(e, t) {
                var n, r, o = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                if (null != o) {
                    var i = [],
                        a = !0,
                        u = !1;
                    try {
                        for (o = o.call(e); !(a = (n = o.next()).done) && (i.push(n.value), !t || i.length !== t); a = !0);
                    } catch (e) {
                        u = !0, r = e
                    } finally {
                        try {
                            !a && null != o.return && o.return()
                        } finally {
                            if (u) throw r
                        }
                    }
                    return i
                }
            }(t, n) || function(e, t) {
                if (e) {
                    if ("string" == typeof e) return c(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return c(e, t)
                }
            }(t, n) || function() {
                throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()),
            h = I[0],
            O = I[1],
            T = (0, o.useStateFromStores)([i.default], function() {
                return i.default.useReducedMotion
            }),
            S = (0, o.useStateFromStores)([s.default], function() {
                return s.default.isFocused()
            }) && (h || !T && !(void 0 !== m && m)),
            v = (0, l.default)({}).pendingAvatar,
            g = (0, o.useStateFromStores)([u.default], function() {
                return null != d && null != f ? u.default.getMember(d, f.id) : null
            });
        return {
            avatarSrc: r.useMemo(function() {
                return null != f ? (0, a.getPreviewAvatar)(p ? null != y ? y : v : void 0, g, f, {
                    canAnimate: S,
                    size: _
                }) : void 0
            }, [p, v, g, f, S, _, y]),
            isAvatarAnimating: S,
            eventHandlers: {
                onMouseEnter: r.useCallback(function() {
                    return O(!0)
                }, []),
                onMouseLeave: r.useCallback(function() {
                    return O(!1)
                }, [])
            }
        }
    }
}