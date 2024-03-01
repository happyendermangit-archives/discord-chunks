function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return u
        }
    });
    var i = n("884691"),
        s = n("79112"),
        r = n("685665"),
        l = n("929423");
    n("424562");
    var o = n("49111"),
        a = n("397336");

    function u(e) {
        let {
            guild: t,
            scrollPosition: n,
            analyticsLocation: u,
            analyticsLocations: c,
            openWithoutBackstack: d = !1
        } = e, {
            analyticsLocations: f
        } = (0, r.default)(), h = (0, i.useCallback)(() => {
            null != t && (0, l.initGuildIdentitySettings)(t, null != c ? c : f), s.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                scrollPosition: n,
                analyticsLocation: u,
                analyticsLocations: c,
                openWithoutBackstack: d
            })
        }, [t, n, u, c, d, f]);
        return h
    }
}