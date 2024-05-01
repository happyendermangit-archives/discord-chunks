function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("122289"),
        a = n("622999");

    function s() {
        let [e, t] = i.useState(null);
        return i.useEffect(() => {
            (0, a.getStripe)().then(e => t(e)).catch(e => {
                (0, r.captureBillingException)(e)
            })
        }, []), e
    }
}