function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("470079"),
        o = n("898511"),
        i = n("622780"),
        a = n("939350"),
        u = n("957808"),
        s = n("208454"),
        l = n("290976"),
        c = n("299529"),
        f = n("660097");

    function d(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    function _(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
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
        }(e, t) || function(e, t) {
            if (e) {
                if ("string" == typeof e) return d(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(n);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return d(e, t)
            }
        }(e, t) || function() {
            throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    t.default = function(e) {
        var t, n = e.user,
            d = e.guildId,
            E = e.size,
            p = e.animateOnHover,
            m = e.showPending,
            y = e.showTryItOut,
            I = e.avatarDecorationOverride,
            h = _(r.useState(!1), 2),
            O = h[0],
            T = h[1],
            S = (0, o.useStateFromStores)([i.default], function() {
                return i.default.useReducedMotion
            }),
            v = (0, o.useStateFromStores)([l.default], function() {
                return l.default.isFocused()
            }),
            g = (0, o.useStateFromStores)([u.default], function() {
                return null != d && null != n ? u.default.getMember(d, n.id) : null
            }),
            A = _((0, o.useStateFromStoresArray)([s.default], function() {
                var e;
                return [null === (e = s.default.getCurrentUser()) || void 0 === e ? void 0 : e.id, s.default.getUser(null == n ? void 0 : n.id)]
            }), 2),
            b = A[0],
            N = A[1],
            R = null == g ? null == N ? void 0 : N.avatarDecoration : null === g.avatarDecoration ? null : null !== (t = g.avatarDecoration) && void 0 !== t ? t : null == N ? void 0 : N.avatarDecoration,
            C = (0, a.default)({
                isTryItOut: void 0 !== y && y,
                guildId: d
            }).pendingAvatarDecoration,
            P = v && (O || !S && !(void 0 !== p && p)),
            D = void 0 !== m && m && void 0 !== C && void 0 !== b && b === (null == n ? void 0 : n.id),
            L = null != d && null === C,
            M = D ? L ? null == n ? void 0 : n.avatarDecoration : null != C ? C : R : null != R ? R : null == n ? void 0 : n.avatarDecoration;
        return {
            avatarPlaceholderSrc: f,
            avatarDecorationSrc: r.useMemo(function() {
                return (0, c.getAvatarDecorationURL)({
                    avatarDecoration: void 0 !== I ? I : M,
                    canAnimate: P,
                    size: E
                })
            }, [M, P, E, I]),
            isAvatarDecorationAnimating: P,
            eventHandlers: {
                onMouseEnter: r.useCallback(function() {
                    return T(!0)
                }, []),
                onMouseLeave: r.useCallback(function() {
                    return T(!1)
                }, [])
            }
        }
    }
}