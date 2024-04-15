function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return E
        }
    }), n("411104"), n("627341");
    var i = n("735250");
    n("470079");
    var r = n("278074"),
        s = n("481060"),
        a = n("1585"),
        o = n("153124"),
        l = n("793397"),
        u = n("228168"),
        d = n("419061"),
        _ = n("384882");
    let c = {
        [u.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
        [u.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
        [u.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
        [u.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
        [u.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
        [u.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56,
        [u.UserProfileTypes.BITE_SIZE]: s.AvatarSizes.SIZE_80,
        [u.UserProfileTypes.FULL_SIZE]: s.AvatarSizes.SIZE_120
    };

    function E(e) {
        let {
            children: t,
            profileType: n,
            isPremium: E,
            hasThemeColors: I,
            hasBanner: T,
            overrideBannerWidth: f,
            hasProfileEffect: S = !1
        } = e, A = c[n], h = (0, o.useUID)(), m = function(e) {
            let {
                profileType: t,
                avatarSize: n,
                hasBanner: i,
                isPremium: o,
                hasThemeColors: _,
                hasProfileEffect: c,
                overrideBannerWidth: E
            } = e, I = d.AvatarDecorationBorderSizes[n];
            if (null == I) throw Error("Unsupported avatar size for banner mask");
            let T = (0, a.getDecorationSizeForAvatarSize)(n),
                {
                    size: f,
                    stroke: S
                } = (0, s.getAvatarSpecs)(n),
                A = {
                    avatarSize: f,
                    avatarBorderSize: S,
                    avatarDecorationSize: T,
                    avatarDecorationBorderSize: I,
                    avatarDecorationOffsetY: -(T + 2 * I) / 2,
                    bannerHeight: (0, l.getUserBannerHeight)({
                        profileType: t,
                        user: {
                            hasBanner: i,
                            isPremium: o,
                            hasProfileEffect: c
                        }
                    })
                },
                h = (0, r.match)(t).with(u.UserProfileTypes.POPOUT, u.UserProfileTypes.BITE_SIZE, () => {
                    let e = _ ? 4 : 0;
                    return {
                        ...A,
                        bannerWidth: (0, l.getUserBannerSize)(t),
                        offsetX: 16 - e,
                        offsetY: 4 + e,
                        avatarDecorationOffsetX: 4
                    }
                }).with(u.UserProfileTypes.MODAL, u.UserProfileTypes.FULL_SIZE, () => ({
                    ...A,
                    bannerWidth: (0, l.getUserBannerSize)(t),
                    offsetX: 14,
                    offsetY: 5,
                    avatarDecorationOffsetX: 2
                })).with(u.UserProfileTypes.SETTINGS, () => ({
                    ...A,
                    bannerWidth: 660,
                    offsetX: 16,
                    offsetY: -22,
                    avatarDecorationOffsetX: 8
                })).with(u.UserProfileTypes.PANEL, () => ({
                    ...A,
                    bannerWidth: (0, l.getUserBannerSize)(u.UserProfileTypes.PANEL),
                    offsetX: 12,
                    offsetY: 8,
                    avatarDecorationOffsetX: 4
                })).with(u.UserProfileTypes.POMELO_POPOUT, () => ({
                    ...A,
                    bannerWidth: (0, l.getUserBannerSize)(u.UserProfileTypes.POMELO_POPOUT),
                    offsetX: 20,
                    offsetY: -20,
                    avatarDecorationOffsetX: 10
                })).with(u.UserProfileTypes.CANCEL_MODAL, () => ({
                    ...A,
                    bannerWidth: (0, l.getUserBannerSize)(u.UserProfileTypes.CANCEL_MODAL),
                    offsetX: 8,
                    offsetY: 2,
                    avatarDecorationOffsetX: 8
                })).exhaustive();
            return null != E ? {
                ...h,
                bannerWidth: E
            } : h
        }({
            profileType: n,
            avatarSize: A,
            hasBanner: T,
            isPremium: E,
            hasThemeColors: I,
            hasProfileEffect: S,
            overrideBannerWidth: f
        }), N = m.avatarSize / 2 + m.avatarBorderSize, O = m.bannerHeight - m.offsetY;
        return (0, i.jsxs)("svg", {
            className: _.bannerSVGWrapper,
            viewBox: "0 0 ".concat(m.bannerWidth, " ").concat(m.bannerHeight),
            style: {
                minWidth: m.bannerWidth,
                minHeight: m.bannerHeight
            },
            children: [(0, i.jsxs)("mask", {
                id: h,
                children: [(0, i.jsx)("rect", {
                    fill: "white",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%"
                }), (0, i.jsx)("circle", {
                    fill: "black",
                    cx: m.offsetX + N,
                    cy: O,
                    r: N
                })]
            }), (0, i.jsx)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: "url(#".concat(h, ")"),
                children: t
            })]
        })
    }
}