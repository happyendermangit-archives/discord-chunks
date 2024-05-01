function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return l
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("232567"),
        a = n("110924"),
        o = n("314897");

    function l() {
        let [e, t] = (0, r.useStateFromStoresArray)([o.default], () => [o.default.isAuthenticated(), null != o.default.getAnalyticsToken()]), n = (0, a.default)(e);
        i.useEffect(() => {
            !n && e && !t && s.fetchCurrentUser({
                withAnalyticsToken: !0
            })
        }, [n, e, t])
    }
}