function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("470079"),
        r = n("442837"),
        a = n("570140"),
        s = n("355467"),
        o = n("314897"),
        l = n("351402"),
        u = n("853872");

    function d() {
        let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
            t = (0, r.useStateFromStores)([l.default], () => l.default.ipCountryCode),
            n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
        return i.useEffect(() => {
            a.default.wait(() => {
                n && !l.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && s.fetchPaymentSources()
            })
        }, [n]), i.useEffect(() => {
            n && !l.default.ipCountryCodeLoaded && s.fetchIpCountryCode()
        }, [t, n]), {
            defaultBillingCountryCode: e,
            ipCountryCode: t
        }
    }
}