function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileContext: function() {
            return f
        },
        useUserProfileContext: function() {
            return S
        }
    }), n("627341");
    var i, r = n("735250"),
        s = n("470079"),
        a = n("803997"),
        o = n.n(a),
        l = n("278074"),
        u = n("541049"),
        d = n("318661"),
        _ = n("358794"),
        c = n("228168"),
        E = n("231338"),
        I = n("862734"),
        T = n("861475");
    let f = s.createContext({
            profileType: null,
            primaryProfileColor: null,
            profileTheme: null !== (i = (0, u.default)()) && void 0 !== i ? i : E.ThemeTypes.DARK
        }),
        S = () => s.useContext(f);

    function A(e) {
        var t, n;
        let {
            user: i,
            guildId: a,
            profileType: u,
            className: E,
            pendingThemeColors: S,
            pendingProfileEffectId: A,
            useDefaultClientTheme: h,
            children: m,
            forceShowPremium: N = !1,
            showOutOfBoundaryComponents: O = !1
        } = e, p = s.useRef(null), R = (0, d.default)(i.id, a), {
            profileTheme: C,
            primaryProfileColor: g
        } = (0, _.default)(i, R, {
            themeElementRef: p,
            pendingThemeColors: S,
            isPreview: N,
            useDefaultClientTheme: h
        }), L = (null == R ? void 0 : R.canEditThemes) || N, D = s.useMemo(() => ({
            profileType: u,
            profileTheme: C,
            primaryProfileColor: g
        }), [u, C, g]);
        return (0, r.jsx)("div", {
            ref: p,
            className: o()((t = u, (0, l.match)(t).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, c.UserProfileTypes.CANCEL_MODAL, () => T.userPopoutOuter).with(c.UserProfileTypes.MODAL, () => T.userProfileModalOuter).with(c.UserProfileTypes.PANEL, () => T.userPanelOuter).with(c.UserProfileTypes.CARD, () => T.userCardOuter).exhaustive()), L ? T.userProfileOuterThemed : T.userProfileOuterUnthemed, I.profileColors, O ? T.showOutOfBoundaryComponents : void 0, "theme-".concat(C), E),
            children: (0, r.jsx)("div", {
                className: o()((n = u, (0, l.match)(n).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, c.UserProfileTypes.CANCEL_MODAL, () => T.userPopoutInner).with(c.UserProfileTypes.MODAL, () => T.userProfileModalInner).with(c.UserProfileTypes.PANEL, () => T.userPanelInner).with(c.UserProfileTypes.CARD, () => T.userCardInner).exhaustive()), function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, l.match)({
                        profileType: n,
                        canUsePremiumProfileCustomization: e,
                        hasBanner: t
                    }).with({
                        profileType: c.UserProfileTypes.PANEL
                    }, () => T.userPanelInnerThemed).with({
                        canUsePremiumProfileCustomization: !0,
                        hasBanner: !0
                    }, () => T.userProfileInnerThemedWithBanner).with({
                        canUsePremiumProfileCustomization: !0
                    }, () => T.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => T.userProfileInnerThemedNonPremium)
                }((null == R ? void 0 : R.canUsePremiumProfileCustomization) || N, null !== A && ((null == R ? void 0 : R.banner) != null || void 0 !== A), u)),
                children: (0, r.jsx)(f.Provider, {
                    value: D,
                    children: m
                })
            })
        })
    }
    A.Inner = function(e) {
        var t;
        let {
            className: n,
            children: i
        } = e, {
            profileType: a
        } = s.useContext(f);
        return (0, r.jsx)("div", {
            className: o()((t = a, (0, l.match)(t).with(c.UserProfileTypes.POPOUT, c.UserProfileTypes.SETTINGS, () => T.userPopoutOverlayBackground).with(c.UserProfileTypes.MODAL, () => T.userProfileModalOverlayBackground).with(c.UserProfileTypes.PANEL, () => T.userPanelOverlayBackground).otherwise(() => T.overlayBackground)), n),
            children: i
        })
    }, t.default = A
}