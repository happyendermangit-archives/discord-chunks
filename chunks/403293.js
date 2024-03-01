function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return l
        }
    }), n("222007");
    var u = n("884691"),
        i = n("745279"),
        r = n("520713");

    function l() {
        let [t, e] = u.useState(null);
        return u.useEffect(() => {
            (0, r.getStripe)().then(t => e(t)).catch(t => {
                (0, i.captureBillingException)(t)
            })
        }, []), t
    }
}