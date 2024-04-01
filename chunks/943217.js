function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return T
        }
    }), n("411104"), n("627341");
    var i = n("735250");
    n("470079");
    var r = n("278074"),
        s = n("477690"),
        a = n("481060"),
        o = n("1585"),
        l = n("153124"),
        u = n("624138"),
        d = n("793397"),
        _ = n("228168"),
        c = n("419061"),
        E = n("384882");
    let I = {
        [_.UserProfileTypes.POPOUT]: a.AvatarSizes.SIZE_80,
        [_.UserProfileTypes.MODAL]: a.AvatarSizes.SIZE_120,
        [_.UserProfileTypes.SETTINGS]: a.AvatarSizes.SIZE_80,
        [_.UserProfileTypes.PANEL]: a.AvatarSizes.SIZE_80,
        [_.UserProfileTypes.POMELO_POPOUT]: a.AvatarSizes.SIZE_80,
        [_.UserProfileTypes.CANCEL_MODAL]: a.AvatarSizes.SIZE_56
    };

    function T(e) {
        let {
            children: t,
            profileType: n,
            isPremium: T,
            hasThemeColors: f,
            hasBanner: S,
            forProfileEffectModal: A,
            hasProfileEffect: h = !1
        } = e, m = I[n], N = (0, l.useUID)(), O = function(e) {
            let {
                profileType: t,
                avatarSize: n,
                hasBanner: i,
                isPremium: l,
                hasThemeColors: E,
                hasProfileEffect: I
            } = e, T = c.AvatarDecorationBorderSizes[n];
            if (null == T) throw Error("Unsupported avatar size for banner mask");
            let f = (0, o.getDecorationSizeForAvatarSize)(n),
                {
                    size: S,
                    stroke: A
                } = (0, a.getAvatarSpecs)(n),
                h = {
                    avatarSize: S,
                    avatarBorderSize: A,
                    avatarDecorationSize: f,
                    avatarDecorationBorderSize: T,
                    avatarDecorationOffsetY: -(f + 2 * T) / 2,
                    bannerHeight: (0, d.getUserBannerHeight)({
                        profileType: t,
                        user: {
                            hasBanner: i,
                            isPremium: l,
                            hasProfileEffect: I
                        }
                    })
                };
            return (0, r.match)(t).with(_.UserProfileTypes.POPOUT, () => {
                let e = E ? (0, u.cssValueToNumber)(s.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                return {
                    ...h,
                    bannerWidth: (0, u.cssValueToNumber)(s.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(_.UserProfileTypes.MODAL, () => ({
                ...h,
                bannerWidth: (0, d.getUserBannerSize)(_.UserProfileTypes.MODAL),
                offsetX: 14,
                offsetY: 5,
                avatarDecorationOffsetX: 2
            })).with(_.UserProfileTypes.SETTINGS, () => ({
                ...h,
                bannerWidth: 660,
                offsetX: 16,
                offsetY: -22,
                avatarDecorationOffsetX: 8
            })).with(_.UserProfileTypes.PANEL, () => {
                let e = (0, u.cssValueToNumber)(s.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                return {
                    ...h,
                    bannerWidth: (0, u.cssValueToNumber)(s.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(_.UserProfileTypes.POMELO_POPOUT, () => ({
                ...h,
                bannerWidth: (0, d.getUserBannerSize)(_.UserProfileTypes.POMELO_POPOUT),
                offsetX: 20,
                offsetY: -20,
                avatarDecorationOffsetX: 10
            })).with(_.UserProfileTypes.CANCEL_MODAL, () => ({
                ...h,
                bannerWidth: (0, d.getUserBannerSize)(_.UserProfileTypes.CANCEL_MODAL),
                offsetX: 8,
                offsetY: 2,
                avatarDecorationOffsetX: 8
            })).exhaustive()
        }({
            profileType: n,
            avatarSize: m,
            hasBanner: S,
            isPremium: T,
            hasThemeColors: f,
            hasProfileEffect: h
        });
        A && (O.bannerWidth = (0, u.cssValueToNumber)(s.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
        let p = O.avatarSize / 2 + O.avatarBorderSize,
            R = O.bannerHeight - O.offsetY;
        return (0, i.jsxs)("svg", {
            className: E.bannerSVGWrapper,
            viewBox: "0 0 ".concat(O.bannerWidth, " ").concat(O.bannerHeight),
            style: {
                minWidth: O.bannerWidth,
                minHeight: O.bannerHeight
            },
            children: [(0, i.jsxs)("mask", {
                id: N,
                children: [(0, i.jsx)("rect", {
                    fill: "white",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%"
                }), (0, i.jsx)("circle", {
                    fill: "black",
                    cx: O.offsetX + p,
                    cy: R,
                    r: p
                })]
            }), (0, i.jsx)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: "url(#".concat(N, ")"),
                children: t
            })]
        })
    }
}