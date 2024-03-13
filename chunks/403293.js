function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        r = n("745279"),
        u = n("520713");

    function l() {
        let [t, e] = i.useState(null);
        return i.useEffect(() => {
            (0, u.getStripe)().then(t => e(t)).catch(t => {
                (0, r.captureBillingException)(t)
            })
        }, []), t
    }
}