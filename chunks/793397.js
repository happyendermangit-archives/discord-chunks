function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildGetPremiumUserBannerStyles: function() {
            return a
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
        s = n("214572");
    let a = e => t => {
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
            return (0, i.match)(t).with(r.UserProfileTypes.POPOUT, r.UserProfileTypes.POMELO_POPOUT, () => a({
                premiumUserWithBanner: s.popoutBannerPremium,
                premiumUserWithoutBanner: s.popoutNoBannerPremium,
                default: s.popoutBanner
            })(n)).with(r.UserProfileTypes.MODAL, () => a({
                premiumUserWithBanner: s.modalBannerPremium,
                premiumUserWithoutBanner: s.modalBanner,
                default: s.modalBanner
            })(n)).with(r.UserProfileTypes.BITE_SIZE, () => a({
                premiumUserWithBanner: s.biteSizeBannerPremium,
                premiumUserWithoutBanner: s.biteSizeBanner,
                default: s.biteSizeBanner
            })(n)).with(r.UserProfileTypes.FULL_SIZE, () => a({
                premiumUserWithBanner: s.fullSizeBannerPremium,
                premiumUserWithoutBanner: s.fullSizeBanner,
                default: s.fullSizeBanner
            })(n)).with(r.UserProfileTypes.SETTINGS, () => s.settingsBanner).with(r.UserProfileTypes.PANEL, () => s.panelBanner).with(r.UserProfileTypes.CANCEL_MODAL, () => s.cancelModalBanner).exhaustive()
        },
        l = e => {
            let {
                profileType: t,
                user: n
            } = e;
            return (0, i.match)(t).with(r.UserProfileTypes.POPOUT, () => a({
                premiumUserWithBanner: 120,
                premiumUserWithoutBanner: 90,
                default: 60
            })(n)).with(r.UserProfileTypes.MODAL, () => a({
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