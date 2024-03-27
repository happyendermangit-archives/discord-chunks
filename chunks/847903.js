function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return d
        }
    });
    var i = n("470079"),
        r = n("442837"),
        s = n("570140"),
        a = n("355467"),
        o = n("314897"),
        l = n("351402"),
        u = n("853872");

    function d() {
        let e = (0, r.useStateFromStores)([u.default], () => u.default.getDefaultBillingCountryCode()),
            t = (0, r.useStateFromStores)([l.default], () => l.default.ipCountryCode),
            n = (0, r.useStateFromStores)([o.default], () => o.default.isAuthenticated());
        return i.useEffect(() => {
            s.default.wait(() => {
                n && !l.default.isPaymentSourceFetching && !u.default.hasFetchedPaymentSources && a.fetchPaymentSources()
            })
        }, [n]), i.useEffect(() => {
            n && !l.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
        }, [t, n]), {
            defaultBillingCountryCode: e,
            ipCountryCode: t
        }
    }
}