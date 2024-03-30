function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    });
    var r, o = n("470079"),
        i = n("278074"),
        a = n("337905"),
        u = n("784184"),
        s = n("535386"),
        l = n("719328"),
        c = n("778513"),
        f = n("884125"),
        d = n("731616"),
        _ = n("86198"),
        E = n("384882");

    function p(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
                p(e, t, n[t])
            })
        }
        return e
    }

    function y(e, t) {
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
    var I = (p(r = {}, d.UserProfileTypes.POPOUT, u.AvatarSizes.SIZE_80), p(r, d.UserProfileTypes.MODAL, u.AvatarSizes.SIZE_120), p(r, d.UserProfileTypes.SETTINGS, u.AvatarSizes.SIZE_80), p(r, d.UserProfileTypes.PANEL, u.AvatarSizes.SIZE_80), p(r, d.UserProfileTypes.POMELO_POPOUT, u.AvatarSizes.SIZE_80), p(r, d.UserProfileTypes.CANCEL_MODAL, u.AvatarSizes.SIZE_56), r);

    function h(e) {
        var t = e.children,
            n = e.profileType,
            r = e.isPremium,
            p = e.hasThemeColors,
            h = e.hasBanner,
            O = e.forProfileEffectModal,
            T = e.hasProfileEffect,
            S = I[n],
            v = (0, l.useUID)(),
            g = function(e) {
                var t = e.profileType,
                    n = e.avatarSize,
                    r = e.hasBanner,
                    o = e.isPremium,
                    l = e.hasThemeColors,
                    E = e.hasProfileEffect,
                    p = _.AvatarDecorationBorderSizes[n];
                if (null == p) throw Error("Unsupported avatar size for banner mask");
                var I = (0, s.getDecorationSizeForAvatarSize)(n),
                    h = (0, u.getAvatarSpecs)(n),
                    O = {
                        avatarSize: h.size,
                        avatarBorderSize: h.stroke,
                        avatarDecorationSize: I,
                        avatarDecorationBorderSize: p,
                        avatarDecorationOffsetY: -(I + 2 * p) / 2,
                        bannerHeight: (0, f.getUserBannerHeight)({
                            profileType: t,
                            user: {
                                hasBanner: r,
                                isPremium: o,
                                hasProfileEffect: E
                            }
                        })
                    };
                return (0, i.match)(t).with(d.UserProfileTypes.POPOUT, function() {
                    var e = l ? (0, c.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                    return y(m({}, O), {
                        bannerWidth: (0, c.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                        offsetX: 16 - e,
                        offsetY: 4 + e,
                        avatarDecorationOffsetX: 4
                    })
                }).with(d.UserProfileTypes.MODAL, function() {
                    return y(m({}, O), {
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.MODAL),
                        offsetX: 14,
                        offsetY: 5,
                        avatarDecorationOffsetX: 2
                    })
                }).with(d.UserProfileTypes.SETTINGS, function() {
                    return y(m({}, O), {
                        bannerWidth: 660,
                        offsetX: 16,
                        offsetY: -22,
                        avatarDecorationOffsetX: 8
                    })
                }).with(d.UserProfileTypes.PANEL, function() {
                    var e = (0, c.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                    return y(m({}, O), {
                        bannerWidth: (0, c.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                        offsetX: 16 - e,
                        offsetY: 4 + e,
                        avatarDecorationOffsetX: 4
                    })
                }).with(d.UserProfileTypes.POMELO_POPOUT, function() {
                    return y(m({}, O), {
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.POMELO_POPOUT),
                        offsetX: 20,
                        offsetY: -20,
                        avatarDecorationOffsetX: 10
                    })
                }).with(d.UserProfileTypes.CANCEL_MODAL, function() {
                    return y(m({}, O), {
                        bannerWidth: (0, f.getUserBannerSize)(d.UserProfileTypes.CANCEL_MODAL),
                        offsetX: 8,
                        offsetY: 2,
                        avatarDecorationOffsetX: 8
                    })
                }).exhaustive()
            }({
                profileType: n,
                avatarSize: S,
                hasBanner: h,
                isPremium: r,
                hasThemeColors: p,
                hasProfileEffect: void 0 !== T && T
            });
        O && (g.bannerWidth = (0, c.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
        var A = g.avatarSize / 2 + g.avatarBorderSize,
            b = g.bannerHeight - g.offsetY;
        return o.createElement("svg", {
            className: E.bannerSVGWrapper,
            viewBox: "0 0 ".concat(g.bannerWidth, " ").concat(g.bannerHeight),
            style: {
                minWidth: g.bannerWidth,
                minHeight: g.bannerHeight
            }
        }, o.createElement("mask", {
            id: v
        }, o.createElement("rect", {
            fill: "white",
            x: "0",
            y: "0",
            width: "100%",
            height: "100%"
        }), o.createElement("circle", {
            fill: "black",
            cx: g.offsetX + A,
            cy: b,
            r: A
        })), o.createElement("foreignObject", {
            x: "0",
            y: "0",
            width: "100%",
            height: "100%",
            overflow: "visible",
            mask: "url(#".concat(v, ")")
        }, t))
    }
}