function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return h
        }
    }), n("70102"), n("794252");
    var i = n("37983");
    n("884691");
    var l = n("506838"),
        a = n("769846"),
        s = n("77078"),
        r = n("606292"),
        o = n("476765"),
        u = n("159885"),
        d = n("878569"),
        c = n("590456"),
        f = n("573135"),
        p = n("201974");
    let m = {
        [c.UserProfileTypes.POPOUT]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.MODAL]: s.AvatarSizes.SIZE_120,
        [c.UserProfileTypes.SETTINGS]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.PANEL]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.POMELO_POPOUT]: s.AvatarSizes.SIZE_80,
        [c.UserProfileTypes.CANCEL_MODAL]: s.AvatarSizes.SIZE_56
    };

    function h(e) {
        let {
            children: t,
            profileType: n,
            isPremium: h,
            hasThemeColors: x,
            hasBanner: E,
            forProfileEffectModal: y,
            hasProfileEffect: g = !1
        } = e, S = m[n], C = (0, o.useUID)(), _ = function(e) {
            let {
                profileType: t,
                avatarSize: n,
                hasBanner: i,
                isPremium: o,
                hasThemeColors: p,
                hasProfileEffect: m
            } = e, h = f.AvatarDecorationBorderSizes[n];
            if (null == h) throw Error("Unsupported avatar size for banner mask");
            let x = (0, r.getDecorationSizeForAvatarSize)(n),
                {
                    size: E,
                    stroke: y
                } = (0, s.getAvatarSpecs)(n),
                g = {
                    avatarSize: E,
                    avatarBorderSize: y,
                    avatarDecorationSize: x,
                    avatarDecorationBorderSize: h,
                    avatarDecorationOffsetY: -(x + 2 * h) / 2,
                    bannerHeight: (0, d.getUserBannerHeight)({
                        profileType: t,
                        user: {
                            hasBanner: i,
                            isPremium: o,
                            hasProfileEffect: m
                        }
                    })
                };
            return (0, l.match)(t).with(c.UserProfileTypes.POPOUT, () => {
                let e = p ? (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING) : 0;
                return {
                    ...g,
                    bannerWidth: (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(c.UserProfileTypes.MODAL, () => ({
                ...g,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.MODAL),
                offsetX: 14,
                offsetY: 5,
                avatarDecorationOffsetX: 2
            })).with(c.UserProfileTypes.SETTINGS, () => ({
                ...g,
                bannerWidth: 660,
                offsetX: 16,
                offsetY: -22,
                avatarDecorationOffsetX: 8
            })).with(c.UserProfileTypes.PANEL, () => {
                let e = (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_PROFILE_THEMED_PADDING);
                return {
                    ...g,
                    bannerWidth: (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_USER_POPOUT_WIDTH),
                    offsetX: 16 - e,
                    offsetY: 4 + e,
                    avatarDecorationOffsetX: 4
                }
            }).with(c.UserProfileTypes.POMELO_POPOUT, () => ({
                ...g,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.POMELO_POPOUT),
                offsetX: 20,
                offsetY: -20,
                avatarDecorationOffsetX: 10
            })).with(c.UserProfileTypes.CANCEL_MODAL, () => ({
                ...g,
                bannerWidth: (0, d.getUserBannerSize)(c.UserProfileTypes.CANCEL_MODAL),
                offsetX: 8,
                offsetY: 2,
                avatarDecorationOffsetX: 8
            })).exhaustive()
        }({
            profileType: n,
            avatarSize: S,
            hasBanner: E,
            isPremium: h,
            hasThemeColors: x,
            hasProfileEffect: g
        });
        y && (_.bannerWidth = (0, u.cssValueToNumber)(a.default.USER_PROFILE_THEMED_CONTAINER_PROFILE_EFFECTS_USER_POPOUT_WIDTH));
        let T = _.avatarSize / 2 + _.avatarBorderSize,
            I = _.bannerHeight - _.offsetY;
        return (0, i.jsxs)("svg", {
            className: p.bannerSVGWrapper,
            viewBox: "0 0 ".concat(_.bannerWidth, " ").concat(_.bannerHeight),
            style: {
                minWidth: _.bannerWidth,
                minHeight: _.bannerHeight
            },
            children: [(0, i.jsxs)("mask", {
                id: C,
                children: [(0, i.jsx)("rect", {
                    fill: "white",
                    x: "0",
                    y: "0",
                    width: "100%",
                    height: "100%"
                }), (0, i.jsx)("circle", {
                    fill: "black",
                    cx: _.offsetX + T,
                    cy: I,
                    r: T
                })]
            }), (0, i.jsx)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: "url(#".concat(C, ")"),
                children: t
            })]
        })
    }
}