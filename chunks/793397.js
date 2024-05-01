function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildGetPremiumUserBannerStyles: function() {
            return s
        },
        getUserBannerHeight: function() {
            return l
        },
        getUserBannerSize: function() {
            return d
        },
        getUserBannerStyles: function() {
            return o
        }
    }), n("627341");
    var i = n("278074"),
        r = n("228168"),
        a = n("851641");
    let s = e => t => {
            if (t.hasBanner || t.hasProfileEffect) return e.premiumUserWithBanner;
            if (t.isPremium) {
                var n;
                return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default
            }
            return e.default
        },
        o = e => {
            let {
                profileType: t,
                user: n
            } = e;
            return (0, i.match)(t).with(r.UserProfileTypes.POPOUT, r.UserProfileTypes.POMELO_POPOUT, () => s({
                premiumUserWithBanner: a.popoutBannerPremium,
                premiumUserWithoutBanner: a.popoutNoBannerPremium,
                default: a.popoutBanner
            })(n)).with(r.UserProfileTypes.MODAL, () => s({
                premiumUserWithBanner: a.modalBannerPremium,
                premiumUserWithoutBanner: a.modalBanner,
                default: a.modalBanner
            })(n)).with(r.UserProfileTypes.BITE_SIZE, () => s({
                premiumUserWithBanner: a.biteSizeBannerPremium,
                premiumUserWithoutBanner: a.biteSizeBanner,
                default: a.biteSizeBanner
            })(n)).with(r.UserProfileTypes.FULL_SIZE, () => s({
                premiumUserWithBanner: a.fullSizeBannerPremium,
                premiumUserWithoutBanner: a.fullSizeBanner,
                default: a.fullSizeBanner
            })(n)).with(r.UserProfileTypes.SETTINGS, () => a.settingsBanner).with(r.UserProfileTypes.PANEL, () => a.panelBanner).with(r.UserProfileTypes.CANCEL_MODAL, () => a.cancelModalBanner).exhaustive()
        },
        l = e => {
            let {
                profileType: t,
                user: n
            } = e;
            return (0, i.match)(t).with(r.UserProfileTypes.POPOUT, () => s({
                premiumUserWithBanner: 120,
                premiumUserWithoutBanner: 90,
                default: 60
            })(n)).with(r.UserProfileTypes.MODAL, () => s({
                premiumUserWithBanner: 212,
                premiumUserWithoutBanner: 106,
                default: 106
            })(n)).with(r.UserProfileTypes.BITE_SIZE, () => 120).with(r.UserProfileTypes.FULL_SIZE, () => 210).with(r.UserProfileTypes.POMELO_POPOUT, () => 64).with(r.UserProfileTypes.SETTINGS, () => 100).with(r.UserProfileTypes.PANEL, () => 120).with(r.UserProfileTypes.CANCEL_MODAL, () => 42).exhaustive()
        },
        u = Object.freeze({
            [r.UserProfileTypes.POPOUT]: 340,
            [r.UserProfileTypes.PANEL]: 480,
            [r.UserProfileTypes.MODAL]: 600,
            [r.UserProfileTypes.SETTINGS]: 600,
            [r.UserProfileTypes.POMELO_POPOUT]: 432,
            [r.UserProfileTypes.CANCEL_MODAL]: 172,
            [r.UserProfileTypes.BITE_SIZE]: 300,
            [r.UserProfileTypes.FULL_SIZE]: 600
        }),
        d = e => u[e]
}