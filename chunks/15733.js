function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return c
        }
    });
    var i = n("884691"),
        r = n("446674"),
        u = n("913144"),
        l = n("850068"),
        a = n("271938"),
        o = n("160299"),
        s = n("357957");

    function c() {
        let t = (0, r.useStateFromStores)([s.default], () => s.default.getDefaultBillingCountryCode()),
            e = (0, r.useStateFromStores)([o.default], () => o.default.ipCountryCode),
            n = (0, r.useStateFromStores)([a.default], () => a.default.isAuthenticated());
        return i.useEffect(() => {
            u.default.wait(() => {
                n && !o.default.isPaymentSourceFetching && !s.default.hasFetchedPaymentSources && l.fetchPaymentSources()
            })
        }, [n]), i.useEffect(() => {
            n && !o.default.ipCountryCodeLoaded && l.fetchIpCountryCode()
        }, [e, n]), {
            defaultBillingCountryCode: t,
            ipCountryCode: e
        }
    }
}