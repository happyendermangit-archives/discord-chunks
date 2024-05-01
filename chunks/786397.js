function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        hasUserTrialOfferExpired: function() {
            return u
        },
        useTrialOffer: function() {
            return d
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("846519"),
        s = n("594174"),
        o = n("295226"),
        l = n("74538");

    function u(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function d(e) {
        let t = (0, r.useStateFromStores)([o.default], () => o.default.getUserTrialOffer(e)),
            [n, d] = i.useState(u(t)),
            _ = (0, r.useStateFromStores)([s.default], () => (0, l.isPremium)(s.default.getCurrentUser()));
        return i.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new a.Timeout,
                    i = () => {
                        let r = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e || e.start(r, () => {
                            !n && u(t) ? d(!0) : i()
                        })
                    };
                return i(), () => e.stop()
            }
        }, [n, t]), n || _ ? null : t
    }
}