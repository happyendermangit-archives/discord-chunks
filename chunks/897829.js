function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("355467"),
        a = n("78839");

    function o() {
        let e = (0, r.useStateFromStores)([a.default], () => a.default.hasFetchedSubscriptions());
        return i.useEffect(() => {
            !e && (0, s.fetchSubscriptions)()
        }, [e]), e
    }
}