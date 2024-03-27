function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        },
        getOrFetchProfileEffects: function() {
            return l
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("365943"),
        a = n("25251");

    function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return i.useEffect(() => {
            (0, s.fetchUserProfileEffects)(e)
        }, [e]), (0, r.useStateFromStores)([a.default], () => a.default.profileEffects)
    }

    function l() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return (0, s.fetchUserProfileEffects)(e), a.default.profileEffects
    }
}