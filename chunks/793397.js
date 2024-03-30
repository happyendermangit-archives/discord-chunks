function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildGetPremiumUserBannerStyles: function() {
            return l
        },
        getUserBannerHeight: function() {
            return d
        },
        getUserBannerSize: function() {
            return c
        },
        getUserBannerStyles: function() {
            return u
        }
    }), n("627341");
    var i = n("278074"),
        r = n("468194"),
        s = n("477690"),
        a = n("228168"),
        o = n("350315");
    let l = e => t => {
            if (t.hasBanner || t.hasProfileEffect) return e.premiumUserWithBanner;
            if (t.isPremium) {
                var n;
                return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default
            }
            return e.default
        },
        u = e => {
            let {
                profileType: t,
                user: n
            } = e;
            return (0, i.match)(t).with(a.UserProfileTypes.POPOUT, a.UserProfileTypes.POMELO_POPOUT, () => l({
                premiumUserWithBanner: o.popoutBannerPremium,
                premiumUserWithoutBanner: o.popoutNoBannerPremium,
                default: o.popoutBanner
            })(n)).with(a.UserProfileTypes.MODAL, () => l({
                premiumUserWithBanner: o.profileBannerPremium,
                premiumUserWithoutBanner: o.profileBanner,
                default: o.profileBanner
            })(n)).with(a.UserProfileTypes.SETTINGS, () => o.settingsBanner).with(a.UserProfileTypes.PANEL, () => o.panelBanner).with(a.UserProfileTypes.CANCEL_MODAL, () => o.cancelModalBanner).exhaustive()
        },
        d = e => {
            let {
                profileType: t,
                user: n
            } = e, o = (0, i.match)(t).with(a.UserProfileTypes.POPOUT, () => l({
                premiumUserWithBanner: s.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                premiumUserWithoutBanner: s.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                default: s.default.USER_BANNER_BANNER_HEIGHT_POPOUT
            })(n)).with(a.UserProfileTypes.MODAL, () => l({
                premiumUserWithBanner: s.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                premiumUserWithoutBanner: s.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                default: s.default.USER_BANNER_BANNER_HEIGHT_PROFILE
            })(n)).with(a.UserProfileTypes.POMELO_POPOUT, () => s.default.USER_BANNER_BANNER_HEIGHT_POMELO).with(a.UserProfileTypes.SETTINGS, () => s.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS).with(a.UserProfileTypes.PANEL, () => s.default.USER_BANNER_BANNER_HEIGHT_PANEL).with(a.UserProfileTypes.CANCEL_MODAL, () => s.default.USER_BANNER_CANCEL_MODAL_HEIGHT).exhaustive();
            return (0, r.cssValueToNumber)(o)
        },
        _ = Object.freeze({
            [a.UserProfileTypes.POPOUT]: 480,
            [a.UserProfileTypes.PANEL]: 480,
            [a.UserProfileTypes.MODAL]: 600,
            [a.UserProfileTypes.SETTINGS]: 600,
            [a.UserProfileTypes.POMELO_POPOUT]: 432,
            [a.UserProfileTypes.CANCEL_MODAL]: 172
        }),
        c = e => _[e]
}