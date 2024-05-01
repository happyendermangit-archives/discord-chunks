function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProfileEffectPreset: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("365943"),
        s = n("25251");
    let o = e => {
        let t = (0, r.useStateFromStores)([s.default], () => s.default.getProfileEffectById(e)),
            n = null != t;
        return i.useEffect(() => {
            null != e && !n && (0, a.fetchUserProfileEffects)(!0)
        }, [e, n]), t
    }
}