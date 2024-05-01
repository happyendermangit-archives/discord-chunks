function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250");
    n("470079");
    var r = n("120356"),
        a = n.n(r),
        s = n("278074"),
        o = n("721987"),
        l = n("138655"),
        u = n("793397"),
        d = n("652853"),
        _ = n("228168"),
        c = n("194502");
    let E = (e, t) => {
            let n = (0, s.match)(e).with(_.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(_.UserProfileTypes.PANEL, () => c.userPanelOuter).with(_.UserProfileTypes.CARD, () => c.userCardOuter).with(_.UserProfileTypes.BITE_SIZE, () => c.biteSizeOuter).with(_.UserProfileTypes.FULL_SIZE, () => c.fullSizeOuter).otherwise(() => c.userPopoutOuter),
                i = t ? c.userProfileOuterThemed : c.userProfileOuterUnthemed;
            return a()(n, i)
        },
        I = (e, t, n) => {
            let i = (0, s.match)(e).with(_.UserProfileTypes.MODAL, _.UserProfileTypes.FULL_SIZE, () => c.userProfileModalInner).with(_.UserProfileTypes.PANEL, () => c.userPanelInner).with(_.UserProfileTypes.CARD, () => c.userCardInner).otherwise(() => c.userPopoutInner),
                r = (0, s.match)(e).with(_.UserProfileTypes.PANEL, () => c.userPanelInnerThemed).with(_.UserProfileTypes.BITE_SIZE, () => c.biteSizeInnerThemed).with(_.UserProfileTypes.FULL_SIZE, () => c.fullSizeInnerThemed).otherwise(() => (0, u.buildGetPremiumUserBannerStyles)({
                    premiumUserWithBanner: c.userProfileInnerThemedWithBanner,
                    premiumUserWithoutBanner: c.userProfileInnerThemedPremiumWithoutBanner,
                    default: c.userProfileInnerThemedNonPremium
                })({
                    isPremium: t,
                    hasBanner: n
                }));
            return a()(i, r)
        };

    function T(e) {
        let {
            user: t,
            displayProfile: n,
            profileType: r,
            className: s,
            pendingThemeColors: u,
            pendingProfileEffectId: _,
            themeOverride: T,
            children: f,
            forceShowPremium: S = !1,
            showOutOfBoundaryComponents: h = !1
        } = e, {
            theme: A,
            primaryColor: m,
            secondaryColor: N
        } = (0, o.default)({
            user: t,
            displayProfile: n,
            pendingThemeColors: u,
            isPreview: S
        }), {
            profileThemeStyle: p,
            profileThemeClassName: O
        } = (0, l.default)({
            theme: null != T ? T : A,
            primaryColor: m,
            secondaryColor: N
        }), R = (null == n ? void 0 : n.canEditThemes) || S, C = null !== _ && ((null == n ? void 0 : n.banner) != null || void 0 !== _);
        return (0, i.jsx)("div", {
            className: a()(E(r, R), h ? c.showOutOfBoundaryComponents : void 0, O, s),
            style: p,
            children: (0, i.jsx)("div", {
                className: I(r, R, C),
                children: (0, i.jsx)(d.UserProfileThemeContextProvider, {
                    profileType: r,
                    theme: null != T ? T : A,
                    primaryColor: m,
                    secondaryColor: N,
                    children: f
                })
            })
        })
    }
    let f = e => (0, s.match)(e).with(_.UserProfileTypes.POPOUT, _.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(_.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(_.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).with(_.UserProfileTypes.BITE_SIZE, () => c.biteSizeOverlayBackground).with(_.UserProfileTypes.FULL_SIZE, () => c.fullSizeOverlayBackground).otherwise(() => c.overlayBackground);
    T.Overlay = function(e) {
        let {
            children: t,
            className: n
        } = e, {
            profileType: r
        } = (0, d.useUserProfileThemeContext)();
        return (0, i.jsx)("div", {
            className: a()(f(r), n),
            children: t
        })
    }, t.default = T
}