function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var i = n("884691"),
        r = n("446674"),
        u = n("850068"),
        l = n("521012");

    function a() {
        let t = (0, r.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
        return i.useEffect(() => {
            !t && (0, u.fetchSubscriptions)()
        }, [t]), t
    }
}