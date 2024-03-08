function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var i = n("884691"),
        u = n("446674"),
        r = n("850068"),
        l = n("521012");

    function a() {
        let t = (0, u.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
        return i.useEffect(() => {
            !t && (0, r.fetchSubscriptions)()
        }, [t]), t
    }
}