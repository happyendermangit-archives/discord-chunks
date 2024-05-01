function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("355467"),
        s = n("78839");

    function o() {
        let e = (0, r.useStateFromStores)([s.default], () => s.default.hasFetchedSubscriptions());
        return i.useEffect(() => {
            !e && (0, a.fetchSubscriptions)()
        }, [e]), e
    }
}