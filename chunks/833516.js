function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasUserTrialOfferExpired: function() {
            return a
        },
        useTrialOffer: function() {
            return _
        }
    }), r("222007");
    var l = r("884691"),
        i = r("446674"),
        n = r("862337"),
        s = r("697218"),
        u = r("340412"),
        f = r("719923");

    function a(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function _(e) {
        let t = (0, i.useStateFromStores)([u.default], () => u.default.getUserTrialOffer(e)),
            [r, _] = l.useState(a(t)),
            E = (0, i.useStateFromStores)([s.default], () => (0, f.isPremium)(s.default.getCurrentUser()));
        return l.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new n.Timeout,
                    l = () => {
                        let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e || e.start(i, () => {
                            !r && a(t) ? _(!0) : l()
                        })
                    };
                return l(), () => e.stop()
            }
        }, [r, t]), r || E ? null : t
    }
}