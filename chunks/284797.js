function(t, e, n) {
    "use strict";
    n.r(e), n.d(e, {
        default: function() {
            return l
        }
    }), n("222007");
    var i = n("884691"),
        r = n("85336"),
        u = n("286350");

    function l(t) {
        let [e, n] = i.useState(u.PurchaseState.WAITING);
        return i.useEffect(() => {
            null != t && t !== r.Step.REVIEW && e !== u.PurchaseState.WAITING && e !== u.PurchaseState.COMPLETED && n(u.PurchaseState.WAITING)
        }, [t, e, n]), [e, n]
    }
}