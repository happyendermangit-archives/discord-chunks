function(e, t, r) {
    "use strict";
    r.r(t), r.d(t, {
        hasUserTrialOfferExpired: function() {
            return f
        },
        useTrialOffer: function() {
            return o
        }
    }), r("222007");
    var n = r("884691"),
        i = r("446674"),
        l = r("862337"),
        u = r("697218"),
        s = r("340412"),
        a = r("719923");

    function f(e) {
        return null != e && null != e.expires_at && Date.now() > Date.parse(e.expires_at)
    }

    function o(e) {
        let t = (0, i.useStateFromStores)([s.default], () => s.default.getUserTrialOffer(e)),
            [r, o] = n.useState(f(t)),
            _ = (0, i.useStateFromStores)([u.default], () => (0, a.isPremium)(u.default.getCurrentUser()));
        return n.useEffect(() => {
            if (null != t && null != t.expires_at) {
                let e = new l.Timeout,
                    n = () => {
                        let i = null != t.expires_at ? Date.parse(t.expires_at) - Date.now() : 0;
                        null == e || e.start(i, () => {
                            !r && f(t) ? o(!0) : n()
                        })
                    };
                return n(), () => e.stop()
            }
        }, [r, t]), r || _ ? null : t
    }
}