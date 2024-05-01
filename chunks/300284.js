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

    function u() {
        let {
            guild: e,
            scrollPosition: t,
            analyticsLocation: n,
            analyticsLocations: u,
            openWithoutBackstack: d
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, {
            analyticsLocations: _
        } = (0, s.default)();
        return (0, i.useCallback)(() => {
            null != e && (0, a.initGuildIdentitySettings)(e, null != u ? u : _), r.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != e ? l.ProfileCustomizationSubsection.GUILD : l.ProfileCustomizationSubsection.USER_PROFILE, {
                scrollPosition: t,
                analyticsLocation: n,
                analyticsLocations: u,
                openWithoutBackstack: d
            })
        }, [e, t, n, u, d, _])
    }
}