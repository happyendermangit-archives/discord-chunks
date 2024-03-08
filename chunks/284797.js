function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        u = n("85336"),
        r = n("286350");

    function l(t) {
        let [e, n] = i.useState(r.PurchaseState.WAITING);
        return i.useEffect(() => {
            null != t && t !== u.Step.REVIEW && e !== r.PurchaseState.WAITING && e !== r.PurchaseState.COMPLETED && n(r.PurchaseState.WAITING)
        }, [t, e, n]), [e, n]
    }
}