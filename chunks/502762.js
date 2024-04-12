function(e, t, n) {
    "use strict";
    n.r(t), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("278074"),
        l = n("318661"),
        u = n("358794"),
        d = n("652853"),
        _ = n("228168"),
        c = n("862734"),
        E = n("785494");

    function I(e) {
        var t, n;
        let {
            user: s,
            guildId: I,
            profileType: T,
            className: f,
            pendingThemeColors: S,
            pendingProfileEffectId: A,
            useDefaultClientTheme: h,
            children: m,
            forceShowPremium: N = !1,
            showOutOfBoundaryComponents: O = !1
        } = e, p = r.useRef(null), R = (0, l.default)(s.id, I), {
            profileTheme: C,
            primaryProfileColor: g
        } = (0, u.default)(s, R, {
            themeElementRef: p,
            pendingThemeColors: S,
            isPreview: N,
            useDefaultClientTheme: h
        }), L = (null == R ? void 0 : R.canEditThemes) || N;
        return (0, i.jsx)("div", {
            ref: p,
            className: a()((t = T, (0, o.match)(t).with(_.UserProfileTypes.POPOUT, _.UserProfileTypes.SETTINGS, _.UserProfileTypes.CANCEL_MODAL, () => E.userPopoutOuter).with(_.UserProfileTypes.MODAL, () => E.userProfileModalOuter).with(_.UserProfileTypes.PANEL, () => E.userPanelOuter).with(_.UserProfileTypes.CARD, () => E.userCardOuter).exhaustive()), L ? E.userProfileOuterThemed : E.userProfileOuterUnthemed, c.profileColors, O ? E.showOutOfBoundaryComponents : void 0, "theme-".concat(C), f),
            children: (0, i.jsx)("div", {
                className: a()((n = T, (0, o.match)(n).with(_.UserProfileTypes.POPOUT, _.UserProfileTypes.SETTINGS, _.UserProfileTypes.CANCEL_MODAL, () => E.userPopoutInner).with(_.UserProfileTypes.MODAL, () => E.userProfileModalInner).with(_.UserProfileTypes.PANEL, () => E.userPanelInner).with(_.UserProfileTypes.CARD, () => E.userCardInner).exhaustive()), function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.match)({
                        profileType: n,
                        canUsePremiumProfileCustomization: e,
                        hasBanner: t
                    }).with({
                        profileType: _.UserProfileTypes.PANEL
                    }, () => E.userPanelInnerThemed).with({
                        canUsePremiumProfileCustomization: !0,
                        hasBanner: !0
                    }, () => E.userProfileInnerThemedWithBanner).with({
                        canUsePremiumProfileCustomization: !0
                    }, () => E.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => E.userProfileInnerThemedNonPremium)
                }((null == R ? void 0 : R.canUsePremiumProfileCustomization) || N, null !== A && ((null == R ? void 0 : R.banner) != null || void 0 !== A), T)),
                children: (0, i.jsx)(d.UserProfileThemeContextProvider, {
                    profileType: T,
                    profileTheme: C,
                    primaryProfileColor: g,
                    children: m
                })
            })
        })
    }
    I.Inner = function(e) {
        var t;
        let {
            className: n,
            children: r
        } = e, {
            profileType: s
        } = (0, d.useUserProfileThemeContext)();
        return (0, i.jsx)("div", {
            className: a()((t = s, (0, o.match)(t).with(_.UserProfileTypes.POPOUT, _.UserProfileTypes.SETTINGS, () => E.userPopoutOverlayBackground).with(_.UserProfileTypes.MODAL, () => E.userProfileModalOverlayBackground).with(_.UserProfileTypes.PANEL, () => E.userPanelOverlayBackground).otherwise(() => E.overlayBackground)), n),
            children: r
        })
    }, t.default = I
}