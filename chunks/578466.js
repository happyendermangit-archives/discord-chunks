function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        BadgeSizes: function() {
            return o
        },
        default: function() {
            return A
        }
    });
    var r, o, i = n("470079"),
        a = n("803997"),
        u = n.n(a),
        s = n("784184"),
        l = n("887377"),
        c = n("813970"),
        f = n("396586"),
        d = n("938752"),
        _ = n("264437"),
        E = n("444226"),
        p = n("768608"),
        m = n("794173"),
        y = n("731616"),
        I = n("281767"),
        h = n("941504"),
        O = n("649570"),
        T = n("839973");

    function S(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function v(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                S(e, t, n[t])
            })
        }
        return e
    }

    function g(e, t) {
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

    function A(e) {
        var t = e.user,
            n = e.guildId,
            r = e.className,
            o = e.shrinkAtCount,
            a = e.shrinkToSize,
            A = e.isTryItOutFlow,
            b = e.size,
            N = (0, m.default)(t.id, n),
            R = (0, p.default)(N).map(function(e) {
                return g(v({}, e), {
                    src: (0, y.getBadgeAsset)(e.icon)
                })
            }),
            C = (0, f.default)().analyticsLocations,
            P = (0, _.useUserProfileAnalyticsContext)(),
            D = P.trackUserProfileAction,
            L = function(e, t) {
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
            }(P, ["trackUserProfileAction"]),
            M = (0, c.useWindowDispatch)();
        if (t.isClyde()) return i.createElement("div", {
            className: u()(r, O.container, O.clydeBadgeList),
            "aria-label": h.default.Messages.PROFILE_USER_BADGES,
            role: "group"
        }, i.createElement(d.default, null));
        A && null == R.find(function(e) {
            return "premium" === e.id
        }) && R.push({
            id: "premium",
            icon: T,
            src: T,
            description: h.default.Messages.PREMIUM_BADGE_TOOLTIP.format({
                date: new Date
            })
        });
        var U = null != o && null != a && R.length > o ? a : void 0 === b ? 0 : b;
        return i.createElement("div", {
            className: u()(r, R.length > 0 ? O.containerWithContent : O.container),
            "aria-label": h.default.Messages.PROFILE_USER_BADGES,
            role: "group"
        }, R.map(function(e) {
            return i.createElement(s.Tooltip, {
                key: e.id,
                position: "top",
                text: e.description,
                spacing: 12
            }, function(t) {
                var n;
                return i.createElement(s.Anchor, g(v({}, t), {
                    onClick: function(n) {
                        D({
                            action: "PRESS_BADGE"
                        }), (0, E.trackUserProfileBadgePressed)(v({
                            badge: e.id,
                            analyticsLocations: C
                        }, L)), null === (r = t.onClick) || void 0 === r || r.call(t);
                        var r, o = null != e.link ? (0, l.default)(e.link) : null;
                        if (null != o) return M.dispatch(I.ComponentActions.POPOUT_CLOSE), o(n)
                    },
                    href: e.link
                }), i.createElement("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: e.src,
                    className: u()((S(n = {}, O.profileBadge24, 0 === U), S(n, O.profileBadge22, 1 === U), S(n, O.profileBadge18, 2 === U), n))
                }))
            })
        }))
    }(r = o || (o = {}))[r.SIZE_24 = 0] = "SIZE_24", r[r.SIZE_22 = 1] = "SIZE_22", r[r.SIZE_18 = 2] = "SIZE_18"
}