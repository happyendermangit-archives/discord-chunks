function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return c
        }
    });
    var r = n("470079"),
        o = n("898511"),
        i = n("629815"),
        a = n("950175"),
        u = n("217014"),
        s = n("362108"),
        l = n("534154");

    function c() {
        var e = (0, o.useStateFromStores)([l.default], function() {
                return l.default.getDefaultBillingCountryCode()
            }),
            t = (0, o.useStateFromStores)([s.default], function() {
                return s.default.ipCountryCode
            }),
            n = (0, o.useStateFromStores)([u.default], function() {
                return u.default.isAuthenticated()
            });
        return r.useEffect(function() {
            i.default.wait(function() {
                n && !s.default.isPaymentSourceFetching && !l.default.hasFetchedPaymentSources && a.fetchPaymentSources()
            })
        }, [n]), r.useEffect(function() {
            n && !s.default.ipCountryCodeLoaded && a.fetchIpCountryCode()
        }, [t, n]), {
            defaultBillingCountryCode: e,
            ipCountryCode: t
        }
    }
}