function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        s = n("446674"),
        r = n("327037"),
        a = n("84339"),
        o = n("271938");

    function l() {
        let [e, t] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]), n = (0, a.default)(e);
        i.useEffect(() => {
            !n && e && !t && r.fetchCurrentUser({
                withAnalyticsToken: !0
            })
        }, [n, e, t])
    }
}