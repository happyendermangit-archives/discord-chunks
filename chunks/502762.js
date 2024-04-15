function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("120356"),
        a = n.n(s),
        o = n("278074"),
        l = n("358794"),
        u = n("793397"),
        d = n("652853"),
        _ = n("228168"),
        c = n("862734"),
        E = n("785494");
    let I = (e, t) => {
            let n = (0, o.match)(e).with(_.UserProfileTypes.MODAL, () => E.userProfileModalOuter).with(_.UserProfileTypes.PANEL, () => E.userPanelOuter).with(_.UserProfileTypes.CARD, () => E.userCardOuter).with(_.UserProfileTypes.BITE_SIZE, () => E.biteSizeOuter).with(_.UserProfileTypes.FULL_SIZE, () => E.fullSizeOuter).otherwise(() => E.userPopoutOuter),
                i = t ? E.userProfileOuterThemed : E.userProfileOuterUnthemed;
            return a()(n, i)
        },
        T = (e, t, n) => {
            let i = (0, o.match)(e).with(_.UserProfileTypes.MODAL, _.UserProfileTypes.FULL_SIZE, () => E.userProfileModalInner).with(_.UserProfileTypes.PANEL, () => E.userPanelInner).with(_.UserProfileTypes.CARD, () => E.userCardInner).otherwise(() => E.userPopoutInner),
                r = (0, o.match)(e).with(_.UserProfileTypes.PANEL, () => E.userPanelInnerThemed).with(_.UserProfileTypes.BITE_SIZE, () => E.biteSizeInnerThemed).with(_.UserProfileTypes.FULL_SIZE, () => E.fullSizeInnerThemed).otherwise(() => (0, u.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: E.userProfileInnerThemedWithBanner,
                    premiumUserWithoutBanner: E.userProfileInnerThemedPremiumWithoutBanner,
                    default: E.userProfileInnerThemedNonPremium
                })({
                    isPremium: t,
                    hasBanner: n
                }));
            return a()(i, r)
        };

    function f(e) {
        let {
            user: t,
            displayProfile: n,
            profileType: s,
            className: o,
            pendingThemeColors: u,
            pendingProfileEffectId: _,
            children: f,
            forceShowPremium: S = !1,
            useDefaultClientTheme: h = !1,
            showOutOfBoundaryComponents: A = !1
        } = e, m = r.useRef(null), {
            profileTheme: N,
            primaryProfileColor: p
        } = (0, l.default)(t, n, {
            themeElementRef: m,
            pendingThemeColors: u,
            useDefaultClientTheme: h,
            isPreview: S
        }), O = (null == n ? void 0 : n.canEditThemes) || S, R = null !== _ && ((null == n ? void 0 : n.banner) != null || void 0 !== _);
        return (0, i.jsx)("div", {
            ref: m,
            className: a()(I(s, O), c.profileColors, A ? E.showOutOfBoundaryComponents : void 0, "theme-".concat(N), o),
            children: (0, i.jsx)("div", {
                className: T(s, O, R),
                children: (0, i.jsx)(d.UserProfileThemeContextProvider, {
                    profileType: s,
                    profileTheme: N,
                    primaryProfileColor: p,
                    children: f
                })
            })
        })
    }
    let S = e => (0, o.match)(e).with(_.UserProfileTypes.POPOUT, _.UserProfileTypes.SETTINGS, () => E.userPopoutOverlayBackground).with(_.UserProfileTypes.MODAL, _.UserProfileTypes.FULL_SIZE, () => E.userProfileModalOverlayBackground).with(_.UserProfileTypes.PANEL, () => E.userPanelOverlayBackground).with(_.UserProfileTypes.BITE_SIZE, () => E.biteSizeOverlayBackground).otherwise(() => E.overlayBackground);
    f.Overlay = function(e) {
        let {
            children: t,
            className: n
        } = e, {
            profileType: r
        } = (0, d.useUserProfileThemeContext)();
        return (0, i.jsx)("div", {
            className: a()(S(r), n),
            children: t
        })
    }, t.default = f
}