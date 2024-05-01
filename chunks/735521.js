function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, {
        default: function() {
            return a
        }
    }), n("47120");
    var i = n("470079"),
        r = n("442837"),
        s = n("509545");

    function a() {
        let [e, t] = i.useState(void 0), [n, a] = i.useState(void 0);
        return {
            selectedSkuId: e,
            selectedPlan: (0, r.useStateFromStores)([s.default], () => null != n ? s.default.get(n) : null),
            setSelectedSkuId: t,
            setSelectedPlanId: a
        }
    }
}