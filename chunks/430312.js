function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileContext: function() {
            return m
        },
        default: function() {
            return h
        }
    }), n("794252");
    var l = n("37983"),
        i = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("217513"),
        u = n("906889"),
        d = n("590456"),
        c = n("388874"),
        f = n("489354");
    let m = i.createContext({
        profileType: null,
        profileTheme: null
    });

    function p(e) {
        var t, n;
        let {
            user: a,
            guildId: p,
            profileType: h,
            className: E,
            pendingThemeColors: g,
            pendingProfileEffectId: C,
            useDefaultClientTheme: S,
            children: T,
            forceShowPremium: I = !1,
            showOutOfBoundaryComponents: v = !1
        } = e, _ = i.useRef(null), N = (0, o.default)(a.id, p), {
            profileTheme: A
        } = (0, u.default)(a, N, {
            themeElementRef: _,
            pendingThemeColors: g,
            isPreview: I,
            useDefaultClientTheme: S
        }), x = (null == N ? void 0 : N.canEditThemes) || I, y = i.useMemo(() => ({
            profileType: h,
            profileTheme: A
        }), [h, A]);
        return (0, l.jsx)("div", {
            ref: _,
            className: s((t = h, (0, r.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), x ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, v ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(A), E),
            children: (0, l.jsx)("div", {
                className: s((n = h, (0, r.match)(n).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutInner).with(d.UserProfileTypes.MODAL, () => f.userProfileModalInner).with(d.UserProfileTypes.PANEL, () => f.userPanelInner).with(d.UserProfileTypes.CARD, () => f.userCardInner).exhaustive()), function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, r.match)({
                        profileType: n,
                        canUsePremiumProfileCustomization: e,
                        hasBanner: t
                    }).with({
                        profileType: d.UserProfileTypes.PANEL
                    }, () => f.userPanelInnerThemed).with({
                        canUsePremiumProfileCustomization: !0,
                        hasBanner: !0
                    }, () => f.userProfileInnerThemedWithBanner).with({
                        canUsePremiumProfileCustomization: !0
                    }, () => f.userProfileInnerThemedPremiumWithoutBanner).otherwise(() => f.userProfileInnerThemedNonPremium)
                }((null == N ? void 0 : N.canUsePremiumProfileCustomization) || I, null !== C && ((null == N ? void 0 : N.banner) != null || void 0 !== C), h)),
                children: (0, l.jsx)(m.Provider, {
                    value: y,
                    children: T
                })
            })
        })
    }
    p.Inner = function(e) {
        var t;
        let {
            className: n,
            children: a
        } = e, {
            profileType: o
        } = i.useContext(m);
        return (0, l.jsx)("div", {
            className: s((t = o, (0, r.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), n),
            children: a
        })
    };
    var h = p
}