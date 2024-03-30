function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        UserProfileContext: function() {
            return d
        }
    });
    var r = n("470079"),
        o = n("803997"),
        i = n.n(o),
        a = n("278074"),
        u = n("794173"),
        s = n("979209"),
        l = n("731616"),
        c = n("862734"),
        f = n("861475"),
        d = r.createContext({
            profileType: null,
            profileTheme: null
        });

    function _(e) {
        var t, n, o = e.user,
            _ = e.guildId,
            E = e.profileType,
            p = e.className,
            m = e.pendingThemeColors,
            y = e.pendingProfileEffectId,
            I = e.useDefaultClientTheme,
            h = e.children,
            O = e.forceShowPremium,
            T = void 0 !== O && O,
            S = e.showOutOfBoundaryComponents,
            v = r.useRef(null),
            g = (0, u.default)(o.id, _),
            A = (0, s.default)(o, g, {
                themeElementRef: v,
                pendingThemeColors: m,
                isPreview: T,
                useDefaultClientTheme: I
            }).profileTheme,
            b = (null == g ? void 0 : g.canEditThemes) || T,
            N = r.useMemo(function() {
                return {
                    profileType: E,
                    profileTheme: A
                }
            }, [E, A]);
        return r.createElement("div", {
            ref: v,
            className: i()((t = E, (0, a.match)(t).with(l.UserProfileTypes.POPOUT, l.UserProfileTypes.SETTINGS, l.UserProfileTypes.CANCEL_MODAL, function() {
                return f.userPopoutOuter
            }).with(l.UserProfileTypes.MODAL, function() {
                return f.userProfileModalOuter
            }).with(l.UserProfileTypes.PANEL, function() {
                return f.userPanelOuter
            }).with(l.UserProfileTypes.CARD, function() {
                return f.userCardOuter
            }).exhaustive()), b ? f.userProfileOuterThemed : f.userProfileOuterUnthemed, c.profileColors, void 0 !== S && S ? f.showOutOfBoundaryComponents : void 0, "theme-".concat(A), p)
        }, r.createElement("div", {
            className: i()((n = E, (0, a.match)(n).with(l.UserProfileTypes.POPOUT, l.UserProfileTypes.SETTINGS, l.UserProfileTypes.CANCEL_MODAL, function() {
                return f.userPopoutInner
            }).with(l.UserProfileTypes.MODAL, function() {
                return f.userProfileModalInner
            }).with(l.UserProfileTypes.PANEL, function() {
                return f.userPanelInner
            }).with(l.UserProfileTypes.CARD, function() {
                return f.userCardInner
            }).exhaustive()), function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 2 ? arguments[2] : void 0;
                return (0, a.match)({
                    profileType: n,
                    canUsePremiumProfileCustomization: e,
                    hasBanner: t
                }).with({
                    profileType: l.UserProfileTypes.PANEL
                }, function() {
                    return f.userPanelInnerThemed
                }).with({
                    canUsePremiumProfileCustomization: !0,
                    hasBanner: !0
                }, function() {
                    return f.userProfileInnerThemedWithBanner
                }).with({
                    canUsePremiumProfileCustomization: !0
                }, function() {
                    return f.userProfileInnerThemedPremiumWithoutBanner
                }).otherwise(function() {
                    return f.userProfileInnerThemedNonPremium
                })
            }((null == g ? void 0 : g.canUsePremiumProfileCustomization) || T, null !== y && ((null == g ? void 0 : g.banner) != null || void 0 !== y), E))
        }, r.createElement(d.Provider, {
            value: N
        }, h)))
    }
    _.Inner = function(e) {
        var t, n = e.className,
            o = e.children,
            u = r.useContext(d).profileType;
        return r.createElement("div", {
            className: i()((t = u, (0, a.match)(t).with(l.UserProfileTypes.POPOUT, l.UserProfileTypes.SETTINGS, function() {
                return f.userPopoutOverlayBackground
            }).with(l.UserProfileTypes.MODAL, function() {
                return f.userProfileModalOverlayBackground
            }).with(l.UserProfileTypes.PANEL, function() {
                return f.userPanelOverlayBackground
            }).otherwise(function() {
                return f.overlayBackground
            })), n)
        }, o)
    }, t.default = _
}