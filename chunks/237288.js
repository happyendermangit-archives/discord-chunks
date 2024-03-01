function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return a
        }
    });
    var u = n("884691"),
        i = n("446674"),
        r = n("850068"),
        l = n("521012");

    function a() {
        let t = (0, i.useStateFromStores)([l.default], () => l.default.hasFetchedSubscriptions());
        return u.useEffect(() => {
            !t && (0, r.fetchSubscriptions)()
        }, [t]), t
    }
}