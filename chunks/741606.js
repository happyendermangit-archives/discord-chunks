function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("693546"),
        s = n("937111");

    function o(e) {
        let t = (0, r.useStateFromStores)([s.default], () => null == e ? null : s.default.getRequest(e)),
            n = (0, r.useStateFromStores)([s.default], () => s.default.hasFetchedRequestToJoinGuilds);
        return i.useEffect(() => {
            !n && a.default.fetchRequestToJoinGuilds()
        }, [n]), t
    }
}