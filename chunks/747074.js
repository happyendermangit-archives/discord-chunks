function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileContext: function() {
            return E
        }
    }), n("627341");
    var i = n("735250"),
        r = n("470079"),
        s = n("803997"),
        a = n.n(s),
        o = n("278074"),
        l = n("318661"),
        u = n("358794"),
        d = n("228168"),
        _ = n("862734"),
        c = n("861475");
    let E = r.createContext({
        profileType: null,
        profileTheme: null
    });

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
            profileTheme: C
        } = (0, u.default)(s, R, {
            themeElementRef: p,
            pendingThemeColors: S,
            isPreview: N,
            useDefaultClientTheme: h
        }), g = (null == R ? void 0 : R.canEditThemes) || N, L = r.useMemo(() => ({
            profileType: T,
            profileTheme: C
        }), [T, C]);
        return (0, i.jsx)("div", {
            ref: p,
            className: a()((t = T, (0, o.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => c.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => c.userPanelOuter).with(d.UserProfileTypes.CARD, () => c.userCardOuter).exhaustive()), g ? c.userProfileOuterThemed : c.userProfileOuterUnthemed, _.profileColors, O ? c.showOutOfBoundaryComponents : void 0, "theme-".concat(C), f),
            children: (0, i.jsx)("div", {
                className: a()((n = T, (0, o.match)(n).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => c.userPopoutInner).with(d.UserProfileTypes.MODAL, () => c.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => c.userPanelInner).with(d.UserProfileTypes.CARD, () => c.userCardInner).exhaustive()), function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.match)({
                        profileType: n,
                        canUsePremiumProfileCustomization: e,
                        hasBanner: t
                    }).with({
                        profileType: d.UserProfileTypes.PANEL
                    }, () => c.userPanelInnerThemed).with({
                        canUsePremiumProfileCustomization: !0,
                        hasBanner: !0
                    }, () => c.userProfileInnerThemedWithBanner).with({
                        canUsePremiumProfileCustomization: !0
                    }, () => c.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => c.userProfileInnerThemedNonPremium)
                }((null == R ? void 0 : R.canUsePremiumProfileCustomization) || N, null !== A && ((null == R ? void 0 : R.banner) != null || void 0 !== A), T)),
                children: (0, i.jsx)(E.Provider, {
                    value: L,
                    children: m
                })
            })
        })
    }
    I.Inner = function(e) {
        var t;
        let {
            className: n,
            children: s
        } = e, {
            profileType: l
        } = r.useContext(E);
        return (0, i.jsx)("div", {
            className: a()((t = l, (0, o.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => c.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => c.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => c.userPanelOverlayBackground).otherwise(() => c.overlayBackground)), n),
            children: s
        })
    }, t.default = I
}