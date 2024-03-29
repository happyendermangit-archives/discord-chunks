function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        useProfileEffectPreset: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("365943"),
        a = n("25251");
    let o = e => {
        let t = (0, r.useStateFromStores)([a.default], () => a.default.getProfileEffectById(e)),
            n = null != t;
        return i.useEffect(() => {
            null != e && !n && (0, s.fetchUserProfileEffects)(!0)
        }, [e, n]), t
    }
}