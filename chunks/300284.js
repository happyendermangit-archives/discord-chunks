function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("470079"),
        r = n("230711"),
        s = n("906732"),
        a = n("18438");
    n("778825");
    var o = n("981631"),
        l = n("526761");

    function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: d,
            openWithoutBackstack: _ = !1
        } = e, {
            analyticsLocations: c
        } = (0, s.default)();
        return (0, i.useCallback)(() => {
            null != t && (0, a.initGuildIdentitySettings)(t, null != d ? d : c), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
                scrollPosition: n,
                analyticsLocation: u,
                analyticsLocations: d,
                openWithoutBackstack: _
            })
        }, [t, n, u, d, _, c])
    }
}