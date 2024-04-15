function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("278074"),
        l = n("318661"),
        u = n("358794"),
        d = n("793397"),
        _ = n("652853"),
        c = n("228168"),
        E = n("862734"),
        I = n("785494");
    let T = (e, t) => {
            let n = (0, o.match)(e).with(c.UserProfileTypes.MODAL, () => I.userProfileModalOuter).with(c.UserProfileTypes.PANEL, () => I.userPanelOuter).with(c.UserProfileTypes.CARD, () => I.userCardOuter).with(c.UserProfileTypes.BITE_SIZE, () => I.biteSizeOuter).with(c.UserProfileTypes.FULL_SIZE, () => I.fullSizeOuter).otherwise(() => I.userPopoutOuter),
                i = t ? I.userProfileOuterThemed : I.userProfileOuterUnthemed;
            return a()(n, i)
        },
        f = (e, t, n) => {
            let i = (0, o.match)(e).with(c.UserProfileTypes.MODAL, c.UserProfileTypes.FULL_SIZE, () => I.userProfileModalInner).with(c.UserProfileTypes.PANEL, () => I.userPanelInner).with(c.UserProfileTypes.CARD, () => I.userCardInner).otherwise(() => I.userPopoutInner),
                r = (0, o.match)(e).with(c.UserProfileTypes.PANEL, () => I.userPanelInnerThemed).with(c.UserProfileTypes.BITE_SIZE, () => I.biteSizeInnerThemed).with(c.UserProfileTypes.FULL_SIZE, () => I.fullSizeInnerThemed).otherwise(() => (0, d.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: I.userProfileInnerThemedWithBanner,
                    premiumUserWithoutBanner: I.userProfileInnerThemedPremiumWithoutBanner,
                    default: I.userProfileInnerThemedNonPremium
                })({
                    isPremium: t,
                    hasBanner: n
                }));
            return a()(i, r)
        };

    function S(e) {
        let {
            user: t,
            guildId: n,
            profileType: s,
            className: o,
            pendingThemeColors: d,
            pendingProfileEffectId: c,
            children: S,
            forceShowPremium: A = !1,
            useDefaultClientTheme: h = !1,
            showOutOfBoundaryComponents: m = !1
        } = e, N = r.useRef(null), O = (0, l.default)(t.id, n), {
            profileTheme: p,
            primaryProfileColor: R
        } = (0, u.default)(t, O, {
            themeElementRef: N,
            pendingThemeColors: d,
            useDefaultClientTheme: h,
            isPreview: A
        }), C = (null == O ? void 0 : O.canEditThemes) || A, g = null !== c && ((null == O ? void 0 : O.banner) != null || void 0 !== c);
        return (0, i.jsx)("div", {
            ref: N,
            className: a()(T(s, C), E.profileColors, m ? I.showOutOfBoundaryComponents : void 0, "theme-".concat(p), o),
            children: (0, i.jsx)("div", {
                className: f(s, C, g),
                children: (0, i.jsx)(_.UserProfileThemeContextProvider, {
                    profileType: s,
                    profileTheme: p,
                    primaryProfileColor: R,
                    children: S
                })
            })
        })
    }
    let A = e => (0, o.match)(e).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, () => I.userPopoutOverlayBackground).with(c.UserProfileTypes.MODAL, c.UserProfileTypes.FULL_SIZE, () => I.userProfileModalOverlayBackground).with(c.UserProfileTypes.PANEL, () => I.userPanelOverlayBackground).with(c.UserProfileTypes.BITE_SIZE, () => I.biteSizeOverlayBackground).otherwise(() => I.overlayBackground);
    S.Overlay = function(e) {
        let {
            children: t,
            className: n
        } = e, {
            profileType: r
        } = (0, _.useUserProfileThemeContext)();
        return (0, i.jsx)("div", {
            className: a()(A(r), n),
            children: t
        })
    }, t.default = S
}