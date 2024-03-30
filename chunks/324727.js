function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    });
    var r = n("470079"),
        o = n("482644"),
        i = n("396586"),
        a = n("748498");
    n("332022");
    var u = n("281767"),
        s = n("382021");

    function l(e) {
        var t = e.guild,
            n = e.scrollPosition,
            l = e.analyticsLocation,
            c = e.analyticsLocations,
            f = e.openWithoutBackstack,
            d = void 0 !== f && f,
            _ = (0, i.default)().analyticsLocations;
        return (0, r.useCallback)(function() {
            null != t && (0, a.initGuildIdentitySettings)(t, null != c ? c : _), o.default.open(u.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? s.ProfileCustomizationSubsection.GUILD : s.ProfileCustomizationSubsection.USER_PROFILE, {
                scrollPosition: n,
                analyticsLocation: l,
                analyticsLocations: c,
                openWithoutBackstack: d
            })
        }, [t, n, l, c, d, _])
    }
}