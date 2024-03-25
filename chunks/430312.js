function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileContext: function() {
            return p
        },
        default: function() {
            return h
        }
    }), n("794252");
    var i = n("37983"),
        l = n("884691"),
        a = n("414456"),
        s = n.n(a),
        r = n("506838"),
        o = n("217513"),
        u = n("906889"),
        d = n("590456"),
        c = n("388874"),
        f = n("489354");
    let p = l.createContext({
        profileType: null,
        profileTheme: null
    });

    function m(e) {
        var t, n;
        let {
            user: a,
            guildId: m,
            profileType: h,
            className: x,
            pendingThemeColors: E,
            pendingProfileEffectId: y,
            useDefaultClientTheme: g,
            children: S,
            forceShowPremium: C = !1,
            showOutOfBoundaryComponents: _ = !1
        } = e, T = l.useRef(null), I = (0, o.default)(a.id, m), {
            profileTheme: v
        } = (0, u.default)(a, I, {
            themeElementRef: T,
            pendingThemeColors: E,
            isPreview: C,
            useDefaultClientTheme: g
        }), A = (null == I ? void 0 : I.canEditThemes) || C, N = l.useMemo(() => ({
            profileType: h,
            profileTheme: v
        }), [h, v]);
        return (0, i.jsx)("div", {
            ref: T,
            className: s((t = h, (0, r.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, d.UserProfileTypes.CANCEL_MODAL, () => f.userPopoutOuter).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOuter).with(d.UserProfileTypes.PANEL, () => f.userPanelOuter).with(d.UserProfileTypes.CARD, () => f.userCardOuter).exhaustive()), A ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, _ ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(v), x),
            children: (0, i.jsx)("div", {
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
                }((null == I ? void 0 : I.canUsePremiumProfileCustomization) || C, null !== y && ((null == I ? void 0 : I.banner) != null || void 0 !== y), h)),
                children: (0, i.jsx)(p.Provider, {
                    value: N,
                    children: S
                })
            })
        })
    }
    m.Inner = function(e) {
        var t;
        let {
            className: n,
            children: a
        } = e, {
            profileType: o
        } = l.useContext(p);
        return (0, i.jsx)("div", {
            className: s((t = o, (0, r.match)(t).with(d.UserProfileTypes.POPOUT, d.UserProfileTypes.SETTINGS, () => f.userPopoutOverlayBackground).with(d.UserProfileTypes.MODAL, () => f.userProfileModalOverlayBackground).with(d.UserProfileTypes.PANEL, () => f.userPanelOverlayBackground).otherwise(() => f.overlayBackground)), n),
            children: a
        })
    };
    var h = m
}