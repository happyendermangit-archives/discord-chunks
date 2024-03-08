function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        u = n("446674"),
        r = n("10514");

    function l() {
        let [t, e] = i.useState(void 0), [n, l] = i.useState(void 0), a = (0, u.useStateFromStores)([r.default], () => null != n ? r.default.get(n) : null);
        return {
            selectedSkuId: t,
            selectedPlan: a,
            setSelectedSkuId: e,
            setSelectedPlanId: l
        }
    }
}