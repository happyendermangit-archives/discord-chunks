function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    }), n("222007");
    var s = n("884691"),
        i = n("446674"),
        r = n("327037"),
        a = n("84339"),
        o = n("271938");

    function d() {
        let [e, t] = (0, i.useStateFromStoresArray)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]), n = (0, a.default)(e);
        s.useEffect(() => {
            !n && e && !t && r.fetchCurrentUser({
                withAnalyticsToken: !0
            })
        }, [n, e, t])
    }
}