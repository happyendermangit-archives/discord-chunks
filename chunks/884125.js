function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        buildGetPremiumUserBannerStyles: function() {
            return c
        },
        getUserBannerHeight: function() {
            return d
        },
        getUserBannerSize: function() {
            return E
        },
        getUserBannerStyles: function() {
            return f
        }
    });
    var r, o = n("278074"),
        i = n("805654"),
        a = n("337905"),
        u = n("731616"),
        s = n("350315");

    function l(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }
    var c = function(e) {
            return function(t) {
                if (t.hasBanner || t.hasProfileEffect) return e.premiumUserWithBanner;
                if (t.isPremium) {
                    var n;
                    return null !== (n = e.premiumUserWithoutBanner) && void 0 !== n ? n : e.default
                }
                return e.default
            }
        },
        f = function(e) {
            var t = e.profileType,
                n = e.user;
            return (0, o.match)(t).with(u.UserProfileTypes.POPOUT, u.UserProfileTypes.POMELO_POPOUT, function() {
                return c({
                    premiumUserWithBanner: s.popoutBannerPremium,
                    premiumUserWithoutBanner: s.popoutNoBannerPremium,
                    default: s.popoutBanner
                })(n)
            }).with(u.UserProfileTypes.MODAL, function() {
                return c({
                    premiumUserWithBanner: s.profileBannerPremium,
                    premiumUserWithoutBanner: s.profileBanner,
                    default: s.profileBanner
                })(n)
            }).with(u.UserProfileTypes.SETTINGS, function() {
                return s.settingsBanner
            }).with(u.UserProfileTypes.PANEL, function() {
                return s.panelBanner
            }).with(u.UserProfileTypes.CANCEL_MODAL, function() {
                return s.cancelModalBanner
            }).exhaustive()
        },
        d = function(e) {
            var t = e.profileType,
                n = e.user,
                r = (0, o.match)(t).with(u.UserProfileTypes.POPOUT, function() {
                    return c({
                        premiumUserWithBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_POPOUT,
                        premiumUserWithoutBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_NO_BANNER_IMAGE_POPOUT,
                        default: a.default.USER_BANNER_BANNER_HEIGHT_POPOUT
                    })(n)
                }).with(u.UserProfileTypes.MODAL, function() {
                    return c({
                        premiumUserWithBanner: a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_PROFILE,
                        premiumUserWithoutBanner: a.default.USER_BANNER_BANNER_HEIGHT_PROFILE,
                        default: a.default.USER_BANNER_BANNER_HEIGHT_PROFILE
                    })(n)
                }).with(u.UserProfileTypes.POMELO_POPOUT, function() {
                    return a.default.USER_BANNER_BANNER_HEIGHT_POMELO
                }).with(u.UserProfileTypes.SETTINGS, function() {
                    return a.default.USER_BANNER_PREMIUM_BANNER_HEIGHT_SETTINGS
                }).with(u.UserProfileTypes.PANEL, function() {
                    return a.default.USER_BANNER_BANNER_HEIGHT_PANEL
                }).with(u.UserProfileTypes.CANCEL_MODAL, function() {
                    return a.default.USER_BANNER_CANCEL_MODAL_HEIGHT
                }).exhaustive();
            return (0, i.cssValueToNumber)(r)
        },
        _ = Object.freeze((l(r = {}, u.UserProfileTypes.POPOUT, 480), l(r, u.UserProfileTypes.PANEL, 480), l(r, u.UserProfileTypes.MODAL, 600), l(r, u.UserProfileTypes.SETTINGS, 600), l(r, u.UserProfileTypes.POMELO_POPOUT, 432), l(r, u.UserProfileTypes.CANCEL_MODAL, 172), r)),
        E = function(e) {
            return _[e]
        }
}