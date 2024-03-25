function(e, t, i) {
    "use strict";
    i.r(t), i.d(t, {
        default: function() {
            return o
        },
        getOrFetchProfileEffects: function() {
            return s
        }
    });
    var l = i("884691"),
        r = i("446674"),
        n = i("189293"),
        u = i("845962");

    function o() {
        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        return l.useEffect(() => {
            (0, n.fetchUserProfileEffects)(e)
        }, [e]), (0, r.useStateFromStores)([u.default], () => u.default.profileEffects)
    }

    function s() {
        return (0, n.fetchUserProfileEffects)(), u.default.profileEffects
    }
}