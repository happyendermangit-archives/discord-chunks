function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProfileEffectPreset: function() {
            return u
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("465478"),
        a = n("412471"),
        u = function(e) {
            var t = (0, o.useStateFromStores)([a.default], function() {
                    return a.default.getProfileEffectById(e)
                }),
                n = null != t;
            return r.useEffect(function() {
                null != e && !n && (0, i.fetchUserProfileEffects)(!0)
            }, [e, n]), t
        }
}