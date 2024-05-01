function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return s
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        a = n("509545");

    function s() {
        let [e, t] = i.useState(void 0), [n, s] = i.useState(void 0);
        return {
            selectedSkuId: e,
            selectedPlan: (0, r.useStateFromStores)([a.default], () => null != n ? a.default.get(n) : null),
            setSelectedSkuId: t,
            setSelectedPlanId: s
        }
    }
}