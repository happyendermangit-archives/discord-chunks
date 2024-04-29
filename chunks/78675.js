function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return O
        }
    }), n("47120");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("866442"),
        l = n("442837"),
        u = n("692547"),
        d = n("481060"),
        _ = n("220082"),
        c = n("583405"),
        E = n("695346"),
        I = n("451478"),
        T = n("311715"),
        f = n("768581"),
        S = n("74538"),
        h = n("888778"),
        A = n("943217"),
        m = n("793397"),
        N = n("474936"),
        p = n("851641");

    function O(e) {
        var t, n;
        let {
            user: s,
            displayProfile: O,
            guildId: R,
            overrideBannerSrc: C,
            profileType: g,
            animateOnHover: L = !1,
            hasProfileEffect: D = !1
        } = e, v = S.default.isPremiumAtLeast(null == O ? void 0 : O.premiumType, N.PremiumTypes.TIER_2), [M, y] = r.useState(!1), P = (0, l.useStateFromStores)([I.default], () => I.default.isFocused()), U = E.GifAutoPlay.getSetting(), {
            bannerSrc: b,
            status: G
        } = (0, h.default)({
            displayProfile: O,
            overrideBannerSrc: C,
            size: (0, m.getUserBannerSize)(g),
            canAnimate: L || !U ? M : P
        }), w = (0, d.useToken)(u.default.unsafe_rawColors.PRIMARY_800).hex(), B = (0, d.getAvatarSize)(d.AvatarSizes.SIZE_80), k = (0, o.hex2int)((0, _.default)(s.getAvatarURL(R, B), w, !1)), V = (0, c.default)(null !== (t = null == O ? void 0 : O.primaryColor) && void 0 !== t ? t : k).hsl;
        return (0, i.jsx)(A.default, {
            isPremium: v,
            hasThemeColors: null !== (n = null == O ? void 0 : O.canEditThemes) && void 0 !== n && n,
            profileType: g,
            hasBanner: null != b,
            hasProfileEffect: D,
            children: (0, i.jsx)("div", {
                className: a()(p.banner, p.divider, (0, m.getUserBannerStyles)({
                    profileType: g,
                    user: {
                        hasBanner: null != b,
                        isPremium: v,
                        hasProfileEffect: D
                    }
                })),
                onMouseMove: () => y(!0),
                onMouseLeave: () => y(!1),
                style: {
                    backgroundImage: null != b ? "url(".concat(b, ")") : void 0,
                    backgroundColor: G !== h.BannerLoadingStatus.COMPLETE ? u.default.unsafe_rawColors.PRIMARY_800.css : V
                },
                children: !U && (0, f.isAnimatedImageURL)(b) && (0, i.jsx)(T.default, {
                    className: p.gifTag
                })
            })
        })
    }
}