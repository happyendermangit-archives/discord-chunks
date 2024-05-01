function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return o
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("693546"),
        a = n("937111");

    function o(e) {
        let t = (0, r.useStateFromStores)([a.default], () => null == e ? null : a.default.getRequest(e)),
            n = (0, r.useStateFromStores)([a.default], () => a.default.hasFetchedRequestToJoinGuilds);
        return i.useEffect(() => {
            !n && s.default.fetchRequestToJoinGuilds()
        }, [n]), t
    }
}